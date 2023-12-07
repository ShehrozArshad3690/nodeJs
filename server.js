let http =require('http');


let server=http.createServer((req,res)=>{
    console.log("Request has been made");
})

server.listen(443,'localhost',()=>{
    console.log("Server is listening for requests on port 443");
})