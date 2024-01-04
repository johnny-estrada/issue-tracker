import express from "express";
const router = express.Router();

import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectById,
} from "../controllers/projectController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getProjects).post(protect, admin, createProject);
router
  .route("/:id")
  .get(protect, getProjectById)
  .put(protect, admin, updateProject)
  .delete(protect, admin, deleteProject);

export default router;
