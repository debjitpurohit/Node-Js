  // fast method to form a server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!Home</h1>')
})
app.get('/about', (req, res) => {
    res.send('<h1>Hello World!About</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//deploy the express.js app on digitalocean but that paid
// read deploy series from code w h....server configuration tutorial