import mongoose from "mongoose";
import slugify from "slugify";

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
  slug: String,
  // slug: {
  //   type: String
  // }
});
//yo euta document middleware ho ,tala ko(document query middleware)
//savew hunu athawa create hunu vanda agadi
articleSchema.pre("save", function (next) {
  console.log(this);
  (this.slug = slugify(this.title, { lower: true })), { replacement: "-" };
  next();
});

articleSchema.pre("save", function (next) {
  console.log("slug database ma save huncha");
  next();
});

articleSchema.post("save", function (doc, next) {
  console.log(doc);
});
export const Article = mongoose.model("Article", articleSchema);
