import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import fs from "fs";
import path from "path";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());
// Allows us to send form data
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Create a write stream for the log file in the 'logs' directory
const logFilePath = path.join(process.cwd(), "logs", "morgan.log");
const logStream = fs.createWriteStream(logFilePath, { flags: "a" });

// Morgan middleware for logging to a file
app.use(morgan("combined", { stream: logStream }));

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

// Custom error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
