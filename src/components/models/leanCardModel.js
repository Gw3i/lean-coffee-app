import mongoose from "mongoose";

const { Schema } = mongoose;

const leanCardSchema = new Schema({
  topic: { type: String, required: true },
  author: { type: String, required: true },
});

const LeanCard =
  mongoose.models.Category || mongoose.model("LeanCard", leanCardSchema);

export default LeanCard;
