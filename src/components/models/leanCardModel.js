import mongoose from "mongoose";
const { Schema } = mongoose;
import "./leanCategoriesModel";

const leanCardSchema = new Schema({
  topic: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

const LeanCard =
  mongoose?.models?.LeanCard || mongoose.model("LeanCard", leanCardSchema);

export default LeanCard;
