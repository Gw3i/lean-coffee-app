import mongoose from "mongoose";
const { Schema } = mongoose;

const leanCardSchema = new Schema({
  topic: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "LeanCategory" },
});

const LeanCard =
  mongoose?.models?.LeanCard || mongoose.model("LeanCard", leanCardSchema);

export default LeanCard;
