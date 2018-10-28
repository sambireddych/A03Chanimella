const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser") // simplifies access to request body
const fs = require('fs')  // NEW - this is required
const app = express()  // make express app
const http = require('http').Server(app)  // inject app into the server

// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 manage our entries
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request (not required to fully work)
// 6 respond with 404 if a bad URI is requested

// Listen for an application request on port 8081
http.listen(8081, function () {
  console.log('app listening on http://127.0.0.1:8081/')
})

// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// 4 http GET default page at /
app.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("index.ejs")
   })
   app.get("/index", function (req, res) {
    res.render("index.ejs")
   })
   // 4 http GET /game
   app.get("/details", function (req, res) {
    res.render("details.ejs")
   })
    
   // 4 http GET /contact
   app.get("/contact", function (req, res) {
    res.render("contact.ejs")
   })

app.get("/test", function (req, res) {
    res.render("test.ejs");

})
   // 5 http POST /contact
app.post("/contact", function (req, res) {
    const api_key = '629e220dd04f35c254cd2847adef26f8-4836d8f5-be91c535';
    const domain = 'sandbox878a2d7eaa814e808783fc36d8e70eb6.mailgun.org';
    const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
   
    // setup e-mail data with unicode symbols
    const mailOptions = {
        from: 'Contact-form-validate <postmaster@sandbox878a2d7eaa814e808783fc36d8e70eb6.mailgun.org>', // sender address
        to: 'sambireddy <chsr222@gmail.com>', // list of receivers
        subject: req.body.name +" question: " +req.body.question, // Subject line
        text: req.body.Message,
        
    }

    mailgun.messages().send(mailOptions, function (error, body) {
        console.log(body);
        if (!error) {
            res.send({
                show: true,
                message: "Mail sent",
                messagebody: "success"
            })
        } else {
            res.send({
                error,
                show: true,
                message: "Mail Not sent",
                messagebody: "Failure! Please try again"
            })
        }
    })
   
    // logs to the terminal window (not the browser)
   // console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
    //})
    // 6 this will execute for all unknown URIs not specifically handled
    app.use(function (request, response) {
        response.status(404).render("404")
    })

    // Listen for an application request on port 8081 & notify the developer
    http.listen(process.env.PORT || 8081, function () {
        console.log('Web app started and listening onhttp://127.0.0.1:8081/');
    })   // Listen for an application request on designated port
  
});
