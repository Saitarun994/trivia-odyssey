const express = require('express');
const app = express();
const path = require('path')


const port = process.env.PORT || 3000

app.use("/", express.static(path.join(__dirname, "../public")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/front-end/webpage/dist/index.html'));
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
