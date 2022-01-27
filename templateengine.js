//Pug: Haml-inspired template engine (formerly Jade).npm install pug --save    its also an dependency

const express = require('express')
const app = express()
const path =require("path")
const port = 80

//serving static files
app.use('/static',express.static('static'))

// set the template engine as pug
app.set('view engine', 'pug')

//set view directory
app.set('views', path.join(__dirname,'views'))

//our pug endpoint

app.get('/pug', function (req, res) {
    res.render('index', { title: 'Hey Debjit', message: 'Hello there!' })
  })

// for postman {get}
app.get('/', (req, res) => {
  res.send('<h1>Hello World!Home</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>Hello World!About</h1>')
  })
// for postman {post}
app.post('/', (req, res) => {
  res.send('<h1>Hello World!Home and this is the post for postman</h1>') 
}) 
app.post('/about', (req, res) => {
  // res.statusCode = 404;
    res.send('<h1>Hello World!About and this is the post for postman</h1>')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
