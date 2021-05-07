const mongoose = require("mongoose");
const dbPath = "mongodb://localhost/mydb";

mongoose
    .connect(dbPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(res => console.log("db connected"))
    .catch(err => console.log("connection error", err));
