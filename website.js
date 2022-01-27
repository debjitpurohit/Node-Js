const fs = require('fs');
const http = require("http");
const hostname = '127.0.0.1';
const port = 3500;



const server = http.createServer((req, res) =>{
            console.log(req.url)
            
            res.setHeader('content-type', 'text/html')
            if(req.url == '/'){
                res.statusCode = 200;
                res.end('<h1> this is debjit purohit</h1> <p> a passionate developer from india </p>');
            }
            else if(req.url == '/about'){
                res.statusCode = 200;
                res.end('<h1> this is about of debjit purohit</h1> ');
            }
            else if(req.url == '/index'){
                res.statusCode = 200;
                const data =fs.readFileSync('index.html'); //fsmodule
                res.end(data.toString());

                // res.end('<h1> this is about of debjit purohit</h1> ');
            }
            else{
                // res.det(); // res.det() is not a function so server become crashed ....[nodemon] app crashed - waiting for file changes before starting...we can use nodemon ./file.js to show the error when crashed and simplicity of server 
                res.statusCode = 404;
                res.end('<h1> page not found in server</h1> ');
            }
            
            

})
server.listen(port,hostname, ()=>{
    console.log(`server is listening on http://${hostname}:${port}`)
});