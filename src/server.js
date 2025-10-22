require("dotenv").config();
const express = require("express"); //commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine.js");
const app = express(); // app express
const port = process.env.PORT || 8081; //port
const hostname = process.env.HOST_NAME;
const webRoutes = require("./routes/web.js");

//config template engine
configViewEngine(app);

//khai bao route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
