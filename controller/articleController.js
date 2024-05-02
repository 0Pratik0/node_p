import { Article } from "./../models/articleModel.js";
const createArticle = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        article: newArticle,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
const getArticle = async (req, res) => {
  try {
    const article = await Article.find(req.body);

    res.status(200).json({
      status: "success",
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
const getOneArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //database naya lekdincha
      runValidators: true, //specify gareko validators haru true cha vane matrai
    });
    res.status(200).json({
      status: "success",
      data: {
        article,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export {
  createArticle,
  getArticle,
  getOneArticle,
  updateArticle,
  deleteArticle,
};
