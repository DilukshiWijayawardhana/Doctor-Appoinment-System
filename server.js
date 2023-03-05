const express = require("express")
const colors = require("colors")
const morgan = reqire("morgan")
const dotenv = require("dotenv")

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/",(req,res) => {
  res.status(200).send({
    message: "server running",

  });
});
//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, ()) => {
  
}