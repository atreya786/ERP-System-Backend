// models/student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  section: { type: String, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  SIC: { type: Number, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  role: { type: String, required: true },
});

const StudentList = mongoose.model("StudentList", studentSchema);

export default StudentList;
