import { Article } from "./../models/articleModel.js";

const findArticle = async (req, res) => {
  const articles = await Article.find();

  res.status(200).render("overview", {
    articles,
  });
};
const helloArticle = async (req, res) => {
  const articles = await Article.find();
  res.status(200).render("hellow", {
    articles,
  });
};

const getsingleArticle = async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  res.status(200).render("view", {
    article,
  });
};
const createeArticle = async (req, res) => {
  res.status(200).render("create");
};
const editsingleArticle = async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });

  res.status(200).render("edit", {
    article,
  });
};
export {
  findArticle,
  helloArticle,
  getsingleArticle,
  createeArticle,
  editsingleArticle,
};
