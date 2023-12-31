import express from "express";
const router = express.Router();

import {
 createProject,
} from "../controllers/projectController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/", protect, admin,  createProject);
// router.get("/projects", protect, getProjects);
// router.get('/projects', protect, getProjectDetails)
// router.put("/projects", protect, updateProjectDetails);
// router.delete('/projects', protect, deleteProject)

export default router;