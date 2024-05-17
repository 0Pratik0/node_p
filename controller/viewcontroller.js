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

const viewArticle = async (req, res) => {
  const articles = await Article.find();

  res.status(200).render("view", {
    articles,
  });
};

const createeArticle = async (req, res) => {
  const articles = await Article.find();

  res.status(200).render("create", {
    articles,
  });
};
const editArticle = async (req, res) => {
  const articles = await Article.find();

  res.status(200).render("edit", {
    articles,
  });
};
export { findArticle, helloArticle, viewArticle, createeArticle, editArticle };
