import express from "express";
const router = express.Router();
import upload from "../middleware/multerMiddleware.js";
import {
  createAttachment,
  getAttachments,
} from "../controllers/attachmentController.js";
import { protect} from "../middleware/authMiddleware.js";

router.route("/").post(upload.single("file"), protect, createAttachment);
router.route("/").get(protect, getAttachments);

export default router;
