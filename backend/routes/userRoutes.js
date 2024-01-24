import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

router.get("/profile", protect, getUserProfile);

router.put("/settings", protect, updateUserProfile);

// router.put("/profile/:id", protect, deleteUserProfile);

router.get("/:id", protect, getUserById);
router.put("/:id", protect, updateUser);
// router.put("/:id", protect, deleteUser);

export default router;
