import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
  },
  createAT: {
    type: Date,
    default: Date.now,
  },
});

export const Article = mongoose.model("Article", articleSchema);
