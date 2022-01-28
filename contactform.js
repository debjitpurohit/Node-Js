const express = require('express')
const fs = require('fs')
const app = express()
const path =require("path")
// const { name } = require('pug/lib')
const port = 80


app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))

//our pug endpoint

app.get('/', function (req, res) {
    res.render('index2.pug')
  })


app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender

    let output =`name of client is ${name}, ${age} yeras old ,${gender}` 
    

    fs.writeFileSync('output.txt',output)
    // console.log(req.body)
    res.render('index2.pug')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
