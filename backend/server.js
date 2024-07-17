import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import attachmentRoutes from "./routes/attachmentRoutes.js";
import { setupModels } from "./models/index.js";
import { setupLogging } from "./middleware/loggingMiddleware.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { setStaticFile } from "./middleware/staticFileMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

// Configure CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Your frontend URL
  credentials: true, // Allow credentials (cookies) to be included in the request
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/attachments", attachmentRoutes);

setupModels();
setupLogging(app);
setStaticFile(app);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
