const express = require("express"); // same as : import express from "express";
require("dotenv").config(); // or import 'dotenv/config'

/*.env  
PORT=3000
*/

const app = express();

// const port = 4000; // 65,535 virtual ports in a system.

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login to my site</h1");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
