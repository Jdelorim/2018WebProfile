var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req,res) {
  res.render('index');
});

app.listen(PORT, listening);

  function listening () {
    console.log(`Listening on PORT: ${PORT}`);
}