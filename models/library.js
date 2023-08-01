// models/library.js
import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publication: { type: String, required: true },
});

const LibraryItem = mongoose.model("LibraryItem", librarySchema);

export default LibraryItem;
