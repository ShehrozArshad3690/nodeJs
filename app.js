const express = require("express");

//express app
const app =express();

//listen for request
app.listen(8080);

//make HTML routes 
app.get('/',(req,res)=>{
    // res.send('Hello World!');                                    //getting string response
    // res.send(`<p>This is my first express app</p>`);             //getting string response
    res.sendFile('./views/index.html',{root:__dirname});
})

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
})
// route for redirect
app.get('/aboutus',(req,res)=>{
    res.redirect('/about');
})

// route for 404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});              // here we manually tell function status code of 404 because it doesn't detect it an error
})