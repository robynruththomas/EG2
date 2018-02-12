var express 	= require("express");
   bodyParser   = require("body-parser"),
   indexRoutes 	= require('./routes/index');

var app = express();
var port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(indexRoutes);


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});