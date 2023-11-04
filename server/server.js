const express = require('express');
const app = express();
const path = require('path');
// const db = require('@cyclic.sh/dynamodb')



const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`Listening on port ${port}`))


app.use(express.static(path.join(__dirname, 'build')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// app.get("/api/greeting/", (req, res) =>{
//   res.send({"hi":"there"})
// })


console.log("this changed")
