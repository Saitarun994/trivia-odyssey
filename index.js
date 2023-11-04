
const express = require('express')
const app = express()


const port = process.env.PORT || 3000

app.use(express.static('/test.html'))





// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
// app.listen(process.env.PORT || 3000)