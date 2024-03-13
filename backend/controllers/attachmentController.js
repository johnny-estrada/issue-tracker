// Allows use async await without wrapping everything in try catch
import asyncHandler from "express-async-handler";
import Attachment from "../models/attachmentModel.js";

// @desc Fetch all attachments
// @route GET /api/attachments
// @access Private
const getAttachments = asyncHandler(async (req, res) => {
  const attachments = await Attachment.findAll();

  if (attachments) {
    res.status(200).json(attachments);
  } else {
    res.status(404);
    throw new Error("Attachments not found");
  }
});

// @desc Create attachment
// @route POST /api/attachment
// @access Private/Manager
const createAttachment = asyncHandler(async (req, res) => {
  const {
    fieldname,
    encoding,
    originalname,
    mimetype,
    destination,
    filename,
    path,
    size,
  } = req.file;

  const { taskId, userId } = req.body;

  // // Find the user's associated task
  // const userTask = await Task.findOne({
  //   where: { userId: userId, id: taskId },
  // });
  // console.log(userTask)

  // // Check if a task is associated with the user
  // if (!userTask) {
  //   res.status(400);
  //   throw new Error("User is not associated with a project");
  // }

  const newFile = await Attachment.create({
    fieldname,
    encoding,
    originalname,
    mimetype,
    destination,
    filename,
    path,
    size,
    userId: userId,
    taskId: taskId,
  });

  if (newFile) {
    res.status(201).json(newFile);
  } else {
    console.error("Error creating attachment:", newFile);
    res.status(400);
    throw new Error("Invalid attachment data");
  }
});

export { getAttachments, createAttachment };
