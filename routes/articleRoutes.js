import express from "express";
import { Article } from "../models/articleModel.js";
import {
  findArticle,
  helloArticle,
  viewArticle,
} from "../controller/viewcontroller.js";
import {
  createArticle,
  getArticle,
  getOneArticle,
  updateArticle,
  deleteArticle,
} from "../controller/articleController.js";
const router = express.Router();

// module.exports=router
export default router;
router.post("/create", createArticle);
router.get("/find", getArticle);
router.route("/:id").get(getOneArticle);
router.route("/:id").patch(updateArticle);
router.route("/:id").delete(deleteArticle);
// router.get("/", findArticle);
router.get("/", viewArticle);

router.get("/hellow", helloArticle);
