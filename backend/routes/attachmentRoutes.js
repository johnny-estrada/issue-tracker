import express from "express";
const router = express.Router();
import upload from "../middleware/multerMiddleware.js"
import { createAttachment } from "../controllers/attachmentController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(upload.single('file'), createAttachment);

export default router;
