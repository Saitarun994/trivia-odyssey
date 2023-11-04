const express = require('express');
const app = express();
const path = require('path');
const CyclicDb = require("@cyclic.sh/dynamodb")


const port = process.env.PORT || 3000; 


async () => {
  const db = CyclicDb("plum-wandering-vultureCyclicDB")
  console.log("blablabl")
}



app.use(express.static(path.join(__dirname, 'build')))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get("/api/rochester/:lat&:lon", (req, res) =>{
	res.send([{ilnk: "/assets/highlandpark.png", name: "Highland park", desc: "Its a asdfasdf asdfasdf asdfasdf adsfasdf asdf park", link: "maps.google.com"},
  {ilnk: "/assets/highlandpark.png", name: "second park", desc: "Its a asdfasdf  asdfasdf adsfasdf asdf park", link: "maps.google.com"},
  {ilnk: "/assets/highlandpark.png", name: "third park", desc: "Its a asdfasdf asdfasdf atrewt6y adsfasdf asdf park", link: "maps.google.com"}
])
})

// app.post('api/rochester/:col&:key', async (req, res) => {
//   console.log(req.body)
//   const col = req.params.col
//   const key = req.params.key
//   console.log(`from collection: ${col} insert key: ${key} with params ${JSON.stringify(req.params)}`)
//   const item = await db.collection(col).set(key, req.body)
//   console.log(JSON.stringify(item, null, 2))
//   res.json(item).end()
// })

// app.get("/api/rochester/:col&:key", async (req, res) => {
//   console.log(req.body)
//   const col = req.params.col
//   const key = req.params.key
//   console.log(`from collection: ${col} get key: ${key} with params ${JSON.stringify(req.params)}`)
//   const item = await db.collection(col).get(key)
//   console.log(JSON.stringify(item, null, 2))
//   res.json(item).end()
// })


app.listen(port, () => console.log(`Listening on port ${port}`))
