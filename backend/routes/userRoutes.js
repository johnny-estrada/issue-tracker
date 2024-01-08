import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/settings", protect, updateUserProfile);
router.get('/', protect, admin, getUsers)

export default router;
