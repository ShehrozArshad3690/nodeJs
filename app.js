const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");

//express app
const app = express();

//connect to mongo db
const dbURI = "mongodb+srv://Shehroz29:DE7OhqpZz0jUP6TV@nodetutes.pqnqv05.mongodb.net/test";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(8080))
  .catch((error) => console.log(error));

// register view engine
app.set("view engine", "ejs");


// //manuall logger
// app.use((req,res,next)=>{
//     console.log("New request made");
//     console.log('Host: ',req.hostname);
//     console.log('Path: ',req.path);
//     console.log('Method: ',req.method);
//     next();
// });

//morgan automated logger middleware
app.use(morgan("dev"));
// this middleware passes the form data into an object so that POST req can use it(we can simply say that this middleware is for accepting form data)
app.use(express.urlencoded({extended:true}));
//static middleware
app.use(express.static("public"));


//saving
app.get("/add-blog", (req, res) => {
    const blog = new Blog({
      title: "Multan",
      snippet: "Historical City",
      body: "This is an old city"
    });
    blog.save()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

app.get('/all-blogs',(req,res)=>{
    Blog.find()
    .then(result=>res.send(result))
    .catch(error=>console.log(error));
});

app.get('/single-blog',(req,res)=>{
    Blog.findById('657838e15f03a6d441d1958f')
    .then(result=>res.send(result))
    .catch(error=>console.log(error));
});

//make HTML routes
app.get("/", (req, res) => {
  // res.send('Hello World!');                                    //getting string response
  // res.send(`<p>This is my first express app</p>`);             //getting string response
  // res.sendFile('./views/index.html',{root:__dirname});
    res.redirect('/blogs');
});

app.get("/about", (req, res) => {
  // res.sendFile('./views/about.html',{root:__dirname});
  res.render("about", { title: "About" });
});
app.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then(result=>{
        res.render('index',{title: 'All Blogs',Blogs:result})
    })
    .catch(error=>console.log(error));
})

app.post('/blogs',(req,res)=>{
  // console.log(req.body);
  const blog = new Blog(req.body);
  blog.save()
  .then(result=>res.redirect('/blogs'))
  .catch(error=>console.log(error));
})

app.get('/blogs/:id',(req,res)=>{
  const id = req.params.id;
  Blog.findById(id)
  .then(result=>{
    res.render('details',{blog:result,title:'Blog Details'})
  })
  .catch(error=>console.log(error));
})

app.delete('/blogs/:id',(req,res)=>{
  const id= req.params.id;
  Blog.findByIdAndDelete(id)
  .then(result=>{
    res.json({redirect:'/blogs'});
  })
  .catch(error=>console.log(error))
})

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// route for redirect
app.get("/aboutus", (req, res) => {
  res.redirect("/about");
});

// route for 404 page
app.use((req, res) => {
  // res.status(404).sendFile('./views/404.html',{root:__dirname});              // here we manually tell function status code of 404 because it doesn't detect it an error
  res.status(404).render("404", { title: "404" });
});
