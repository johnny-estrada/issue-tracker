import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use(express.json());
// Allows us to send form data
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);

// app.get("/", (req, res) => res.send("Server is ready"));

// Custom error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
