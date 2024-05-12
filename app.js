//middleware haru halni
import express from "express";

import pug from "pug";
import articleRouter from "./routes/articleRoutes.js";
import path from "path";
const __dirname = path.resolve();

const app = express();

// pug use garna engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// serving static file
app.use(express.static("./public"));
const port = 3000;
app.use(express.json()); //hamle vanni like json ma kura auxa

app.use("/articles", articleRouter);

export { app };
