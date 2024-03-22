import express from "express";
const router = express.Router();

import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectById,
} from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getProjects).post(protect, createProject);
router
  .route("/:id")
  .get(protect, getProjectById)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

export default router;
