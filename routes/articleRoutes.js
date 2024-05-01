import express from "express";
import { Article } from "../models/articleModel.js";
import {
  createArticle,
  getArticle,
  getOneArticle,
  updateArticle,
} from "../controller/articleController.js";
const router = express.Router();

// module.exports=router
export default router;
router.post("/create", createArticle);
router.get("/find", getArticle);
router.route("/:id").get(getOneArticle);
router.route("/:id").patch(updateArticle);
