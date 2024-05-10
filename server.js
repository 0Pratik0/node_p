// const express = require("express");
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import pug from "pug";
import articleRouter from "./routes/articleRoutes.js";
import path from "path";
const __dirname = path.resolve();
dotenv.config({ path: "./config.env" });
const app = express();

//pug use garna engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//serving static file
app.use(express.static("./public"));
const port = 3000;
app.use(express.json()); //hamle vanni like json ma kura auxa

app.use("/articles", articleRouter);

//mongodb lai connect garna
const DB = `${process.env.MONGODB_URL}`;
mongoose.connect(DB, {}).then(() => console.log("database connect vayo"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
