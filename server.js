let http = require("http");
let fs = require("fs");

// created a server
let server = http.createServer((req, res) => {
  console.log("Request has been made");
  console.log(req.url, req.method);
  //set header content type
  res.setHeader("Content-Type", "text/html");

  // //set plain content
  // res.write('<h1>Hello This is response</h1>');
  // res.write('<p>Hello This is another response</p>');
  // //end the response to send to browser
  // res.end();

  // added basic routing
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/aboutus":
      res.statusCode = 301;
      res.setHeader("Location","/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  // send an html file as response
  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      res.end();
    } else {
      // res.write(data);
      res.end(data); //because we are send just one type of response so we can also write in this way
    }
  });
});

// listens the server on specific port
server.listen(443, "localhost", () => {
  console.log("Server is listening for requests on port 443");
});
