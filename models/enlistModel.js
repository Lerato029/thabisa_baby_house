/*=====================================================Enlist Application Model============================ */
//require mongoose to be able to create model
import mongoose from "mongoose";

//referencing user for each application
const enlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    fullName: String,
    email: String,
    mobile: String,
    role: String,
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//store model in Dataset variable then export it
let Dataset = mongoose.models.enlist || mongoose.model("enlist", enlistSchema);
export default Dataset;
