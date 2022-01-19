const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/hello-world",(req, res) => {
    res.send("hello-world");
});

app.listen(process.env.PORT, () => {
    console.log("backend server has started at" + process.env.PORT);
});
console.log(process.env.PORT);
