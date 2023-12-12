const express = require("express");

//express app
const app =express();

// register view engine
app.set('view engine','ejs');

//listen for request
app.listen(8080);

//make HTML routes 
app.get('/',(req,res)=>{
    // res.send('Hello World!');                                    //getting string response
    // res.send(`<p>This is my first express app</p>`);             //getting string response
    // res.sendFile('./views/index.html',{root:__dirname});
    const Blogs=[
        {title:'Earth',snippet:'lorem ipsumkj  sdkf jsdlf jsldf '},
        {title:'Mars',snippet:'lorem ipsumkj  sdkf jsdlf jsldf '},
        {title:'Sun',snippet:'lorem ipsumkj  sdkf jsdlf jsldf '}
    ];
    res.render('index' , {title:'Home',Blogs});
})

app.get('/about',(req,res)=>{
    // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about' , {title: 'About'});
})

app.get('/blogs/create',(req,res)=>{
    res.render('create' , {title: 'Create a new blog'});
})

// route for redirect
app.get('/aboutus',(req,res)=>{
    res.redirect('/about' , {title: 'About'});
})

// route for 404 page
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});              // here we manually tell function status code of 404 because it doesn't detect it an error
    res.status(404).render('404' , {title: '404'});
})