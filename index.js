var express 	= require("express");
   bodyParser   = require("body-parser"),
   indexRoutes 	= require('./routes/index');
   
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(indexRoutes);

app.listen(3000, function() {
    console.log("server is on!")
});

