
const express = require('express')
const app = express()


const port = process.env.PORT || 3000






app.all('/', (req, res) => {

    res.send(app.use(express.static('/test.html')))
})
app.listen(process.env.PORT || 3000)