import express from "express";
const router = express.Router();
import upload from "../middleware/multerMiddleware.js";
import {
  createAttachment,
  getAttachments,
} from "../controllers/attachmentController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(upload.single("file"), createAttachment);
router.route("/").get(getAttachments);

export default router;
