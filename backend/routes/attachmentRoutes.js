import express from "express";
const router = express.Router();
import upload from "../middleware/fileUploadMiddleware.js";
import {
  createAttachment,
  getAttachments,
} from "../controllers/attachmentController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(upload.single("file"), createAttachment);
router.route("/").get(protect, getAttachments);

export default router;
