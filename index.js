const express = require("express");
const app = express();
const morgan = require("morgan");
const port = process.env.SERVER_PORT || 4000;
const router = require("./router/route");

// const { body, validationResult } = require("express-validator"); //express validator

//middleWare
app.use(express.json()); ///to read body  as a json
app.use("/courses", router); ///local host
app.use(morgan("dev")); ///// morgan
//(or)=>// app.use(bodyParser())

//connect to server
app.listen(port, (req, res) => {
  console.log("connect to  server  " + port);
});
