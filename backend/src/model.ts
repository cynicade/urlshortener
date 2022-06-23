import { Schema, model } from "mongoose";
import { IUrl } from "./types";

const urlSchema = new Schema<IUrl>({
  original: { type: String, required: true },
  shortened: { type: String, required: true, unique: true },
});

const Url = model<IUrl>("Url", urlSchema);
export default Url;
