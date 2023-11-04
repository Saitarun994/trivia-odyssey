const express = require('express');
const app = express();
const path = require('path');



const port = process.env.PORT || 3000; 


app.use(express.static(path.join(__dirname, 'build')))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get("/api/rochester/:lat&:lon", (req, res) =>{
	res.send({ilnk: "", name: "Highland park", desc: "Its a park", link: "maps.google.com"})
})


app.post('/:col/:key', async (req, res) => {
  console.log(req.body)

  const col = req.params.col
  const key = req.params.key
  console.log(`from collection: ${col} delete key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(col).set(key, req.body)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})


console.log("this changed")
app.listen(port, () => console.log(`Listening on port ${port}`))
