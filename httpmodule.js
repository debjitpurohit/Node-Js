///to build a http server

const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
            console.log(req.url)
            res.statusCode = 200;
            res.setHeader('content-type', 'text/html')
            res.end('<h1> this is debjit purohit</h1> <p> a passionate developer from india </p>');

})
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
});