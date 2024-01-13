import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: { type: String, required: [true, "Tag is required"] },
});

const Prompt = mongoose.models.Prompt || mongoose.model("Prompt", promptSchema);

export default Prompt;
