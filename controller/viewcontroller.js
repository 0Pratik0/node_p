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

export { findArticle, helloArticle, viewArticle };
