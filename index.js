import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from "./config/db.js";

// Import route files
import studentRoutes from "./routes/student.js";
import staffRoutes from "./routes/staff.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

connectToDB();

// Mount route files
app.use("/api", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", staffRoutes);
app.use("/api", userRoutes);

app.listen(5000, () => console.log("Server started on port 5000"));
