const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const app = express();
 
const PORT = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.engine("handlebars", hbs({ defaultLayout: "main" }));

app.set("partials",path.join(__dirname,"views/partials"));
app.set("view engine", "handlebars");
//forces ssl 
const enforce = require('express-sslify');
 app.use(enforce.HTTPS({ trustProtoHeader: true }))

 app.use(express.static(path.join(__dirname, './public')));
require("./routes/apiRoutes")(app);


app.listen(PORT, listening);
function listening () {
    console.log(`Listening on PORT: ${PORT}`);
}