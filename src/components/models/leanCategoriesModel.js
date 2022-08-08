import mongoose from "mongoose";
const { Schema } = mongoose;

const leanCategoriesSchema = new Schema({
  name: { type: String, required: true },
});

const Category =
  mongoose?.models?.Category ||
  mongoose.model("Category", leanCategoriesSchema);

export default Category;
