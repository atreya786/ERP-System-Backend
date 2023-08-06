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
  dues: { type: Number, required: true },
  packageSal: { type: Number, required: true },
  Math: { type: Object, required: true },
  sub2: { type: Number, required: true },
  sub3: { type: Number, required: true },
  sub4: { type: Number, required: true },
  sub5: { type: Number, required: true },
  fine: { type: Number, required: true },
  issueDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  book: { type: String, required: true },
});

const StudentList = mongoose.model("StudentList", studentSchema);

export default StudentList;
