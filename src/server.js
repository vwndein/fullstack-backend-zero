require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine.js");
const app = express(); // app express
const port = process.env.PORT || 8081; //port
const hostname = process.env.HOST_NAME;
const webRoutes = require("./routes/web.js");
const connection = require("./config/database.js");

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //for form data

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

//test connection

// simple query
connection.query("select * from Users u", function (err, results, fields) {
  console.log(">>>> results=", results);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
