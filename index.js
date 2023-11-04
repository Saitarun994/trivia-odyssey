
const express = require('express')
const app = express()
const path = require('path')


const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));





// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
// app.listen(process.env.PORT || 3000)