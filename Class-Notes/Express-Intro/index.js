// CommonJS Syntax uses 'require' instaed of 'import'
// Importing the express module and storing it inside a variable called express
// The express module/library is a function that returns the express object/app
// Require without a relative path will search through your node_modules
// Require with a relative path will search through your file directory for other .js files that are exporting data
const express = require("express");

// We are calling the express function to initialize our express object/app in a variable called app
const app = express();

//  Note: Middleware & Configurations
// The line below instructs our express application to look inside a folder at the path './views' for all of our views files
app.set("views", "./views");
// The line below configures the default template/view engine for our express application to be 'ejs'
app.set("view engine", "ejs");

// Setting up our first route
// "/hello-world" is the endpointpath of this route
// 'request' represents the incoming HTTP request from the client/browser
// 'response' is the express object that we can build upon to respond to the received HTTP request
// The callback function here is commonly referred to as a 'controller' because it handles the server/API logic for processing and responding to incoming HTTP requests
// app.get configures this route to listen to match with a GET request
// The route below can be tested at http://localhost:3500/hello-world
app.get("/hello-world", function (request, response) {
  console.log(`Server has received a request at ${request.url}`);
  //   console.dir(request);
  // Construct an HTTP response
  // response.send("Hello World!");
  // response.render is used to render an ejs file
  response.render("index.ejs", {
    data: "123",
    clothes: [
      "T-Shirt",
      "Polo",
      "Jeans",
      "Shoes",
      "Hats",
      "Sunglasses",
      "Jackets/Coats",
    ],
  });
});

app.get("*", (req, res) => {
  res.render("color.ejs", { chosenColor: req.path });
});

// app.listen will attach our running application to a port on the host computer (i.e. localhost for now), and the callback function will execute when it completes
app.listen(3500, () => {
  console.log(`Express server listening on port 3500...`);
});
