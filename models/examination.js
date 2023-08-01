// models/examination.js
import mongoose from "mongoose";

const examinationSchema = new mongoose.Schema({
  examName: { type: String, required: true },
  date: { type: Date, required: true },
});

const Examination = mongoose.model("Examination", examinationSchema);

export default Examination;
