const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./db.js");
const routes = require("./routes/routes.js");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => console.log("server at started port:3000"));
app.use("/employee", routes);
