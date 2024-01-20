import express from "express";
const router = express.Router();
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getTasks).post(protect, admin, createTask);

router
  .route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;
