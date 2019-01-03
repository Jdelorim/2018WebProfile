var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var hbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "handlebars");

app.use(express.static("public"));
require("./routes/apiRoutes")(app);

app.listen(PORT, listening);

  function listening () {
    console.log(`Listening on PORT: ${PORT}`);
}