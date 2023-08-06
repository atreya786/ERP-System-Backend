// models/exam.js
import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

const Exam = mongoose.model("Exam", examSchema);

export default Exam;
