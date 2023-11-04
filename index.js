
const express = require('express')
const app = express()


app.use(express.static('front-end/webpage'))





// app.all('/', (req, res) => {
//     console.log("Just got a request!")
//     res.send('Yo!')
// })
// app.listen(process.env.PORT || 3000)