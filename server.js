const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//config dotenv
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get('/',(req,res) => {
  res.status(200).send({
    message: "server running",

  });
});
/*port
const node_mode = process.env.NODE_MODE || 'development';
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
   console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
    .bgCyan.white
    );
});*/

// set default value for NODE_MODE to 'development'
const node_mode = process.env.NODE_MODE || 'development';
const port = process.env.PORT || 8080;

// start the server
app.listen(port, () => {
  console.log(`Server Running in ${node_mode} Mode on port ${port}`.bgCyan.white);
});


