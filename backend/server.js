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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Create a write stream for the log file in the 'logs' directory
const logFilePath = path.join(process.cwd(), "logs", "morgan.log");
const logStream = fs.createWriteStream(logFilePath, { flags: "a" });

morgan.token("date", (req, res) => {
  const pacificOptions = {
    timeZone: "America/Los_Angeles",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  return new Date().toLocaleString("en-US", pacificOptions);
});

const logFormat =
  ":date[web] :method :url :status :response-time ms - :res[content-length]\n";

app.use(
  morgan(logFormat, {
    stream: logStream,
    skip: (req, res) => res.statusCode < 400,
  })
);

// Add log rotation functionality
// have to install a package

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
