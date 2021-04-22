require("./db");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

// Create express instance 
const app = express();

// Routers
const messages = require("./routes/messages");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
// app.use(helmet());
app.use("/messages", messages);


module.exports = {
    path: "/api",
    handler: app
};
