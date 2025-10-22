require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine.js");
const app = express(); // app express
const port = process.env.PORT || 8081; //port
const hostname = process.env.HOST_NAME;
const webRoutes = require("./routes/web.js");
const mysql = require("mysql2");

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("select * from Users u", function (err, results, fields) {
  console.log(">>>> results=", results);
  console.log(">>>>fields=", fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
