const express = require("express");
const exhandlebars = require("express-handlebars");
const path = require("path");
// Initialization
const app = express();

//Settings
app.set("port", process.env.PORT || 4000); //IF port doesnt exist, use 4000
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exhandlebars({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
  })
);

app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({ extended: false })); //Everytime data arrives, stays in a json file

// Global Variables

// Routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/notes.routes"));

// Static Files
app.use(express.static(path.join(__dirname, "public"))); //Sets public folder route

module.exports = app;
