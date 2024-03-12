// Allows use async await without wrapping everything in try catch
import asyncHandler from "express-async-handler";
import Attachment from "../models/attachmentModel.js";

// @desc Create attachment
// @route POST /api/attachment
// @access Private/Manager
const createAttachment = asyncHandler(async (req, res) => {
  const file = req.file;

  console.log(file)
  const newFile = Attachment.create({
    fieldname: file.fieldname,
    encoding: file.encoding,
    originalname: file.originalname,
    mimetype: file.mimetype,
    destination: file.destination,
    filename: file.filename,
    path: file.path,
    size: file.size
  });

  if (newFile) {
    res.status(201).json(newFile);
  } else {
    res.status(400);
    throw new Error("Invalid attachment data");
  }
});

export { createAttachment };
