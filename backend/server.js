const express = require('express');
const app = express();
const path = require('path');
const CyclicDb = require("@cyclic.sh/dynamodb")


const port = process.env.PORT || 3000; 
const db = CyclicDb("plum-wandering-vultureCyclicDB")
const locs = db.collection("locs")
const ques = db.collection("ques")
const imgs = db.collection("imgs")


app.use(express.static(path.join(__dirname, 'build')))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

app.get("/api/getcity")


app.get("/api/rochester/:lat&:lon", async (req, res) => {

  var inlat = Number(req.params.lat)
  var inlon = Number(req.params.lon)


    var all = await locs.list()
    var close = []
    for (var i = 0; i < all.results.length; i++){
      var temp = await locs.get(all.results[i].key)
      var lat = Number(temp.props.Coordinates.match("^[^,]*")[0])
      var lon = Number(temp.props.Coordinates.match("(?<=, ).*")[0])
      var imgtemp = await imgs.get(temp.props.Location)
      var dist = haversine(inlat, inlon, lat, lon)
      if (dist < 1){
        var qall = await ques.list()
        var qclose = []
        for (var n = 0; n < qall.results.length; n++){

          var qtemp = await ques.get(qall.results[n].key)
          console.log(qtemp.props.Location_or_Event)
          if(temp.props.Location == qtemp.props.Location_or_Event){
            
          var qtempout = {
            question: qtemp.props.Question,
            correct: qtemp.props.Correct,
            wrong1: qtemp.props.Incorrect1,
            wrong2: qtemp.props.Incorrect2,
            wrong3: qtemp.props.Incorrect3,
          }
        qclose.push(qtempout)
        }}
        var tempout = {
          ilnk:imgtemp.props.Name,
          name:temp.props.Location,
          desc:temp.props.Descripton,
          link:"https://www.google.com/maps/dir//"+lat+","+lon,
          questions: qclose
        }
        close.push(tempout)
      }
    }
    if (close.length < 50){
      res.send([{
        ilnk:"https://i.imgur.com/6g5lPS3_d.webp?maxwidth=760&fidelity=grand",
        name:"No Locations are close :(",
        desc:"It appears that you are not close to any of our locations",
        link:"https://www.google.com/maps/dir//43.1315527,-77.6028554"
    }])
    }
    else{
      res.send(close)
    }
})

app.get("/api/getquestions/:loc", async(req, res) => {
  var loc = req.params.loc
  console.log(loc)
  var all = await ques.list()
  var close = []
  for (var i = 0; i < all.results.length; i++){
      var temp = await ques.get(all.results[i].key)
      if(loc == temp.props.Location_or_Event){
        var tempout = {
          question: temp.props.Question,
          correct: temp.props.Correct,
          wrong1: temp.props.Incorrect1,
          wrong2: temp.props.Incorrect2,
          wrong3: temp.props.Incorrect3,
        }
         
        close.push(tempout)
      }
  }
  res.send(close)
})


app.get("/api/locs/:q", async (req, res) => {
  console.log("hi")
    var q = req.params.q
    console.log(q)
    var out = await locs.get(q)
    res.send(out)
})

app.get("/api/ques/:q", async (req, res) => {
  console.log("hi")
    var q = req.params.q
    console.log(q)
    var out = await ques.get(q)
    res.send(out)
})






app.listen(port, () => console.log(`Listening on port ${port}`))

