import mongoose from "mongoose";
const { Schema } = mongoose;

const leanCategoriesSchema = new Schema({
  name: { type: String, required: true },
});

const LeanCategory =
  mongoose?.models?.LeanCategory ||
  mongoose.model("LeanCategory", leanCategoriesSchema);

export default LeanCategory;
