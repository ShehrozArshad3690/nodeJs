let http =require('http');

// created a server
let server=http.createServer((req,res)=>{
    console.log("Request has been made");
})

// listens the server on specific port
server.listen(443,'localhost',()=>{
    console.log("Server is listening for requests on port 443");
})