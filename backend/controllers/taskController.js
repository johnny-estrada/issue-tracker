import asyncHandler from "express-async-handler";
import Task from "../models/taskModel.js";
import Project from "../models/projectModel.js";

// @desc Fetch all task
// @route GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.findAll();

  if (tasks) {
    res.status(200).json(tasks);
  } else {
    res.status(404);
    throw new Error("Projects not found");
  }
});

// @desc Fetch single task
// @route GET /api/tasks/:id
// @access Private
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (task) {
    res.json(task);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

// @desc Create task
// @route POST /api/tasks
// @access Private/Developer
const createTask = asyncHandler(async (req, res) => {
  const {
    name,
    status,
    priority,
    asignee,
    startDate,
    targetDate,
    description,
    projectId,
  } = req.body;

  // Find the user's associated project
  const userProject = await Project.findOne({
    where: { userId: req.user.id, id: projectId },
  });

  // Check if a project is associated with the user
  if (!userProject) {
    res.status(400);
    throw new Error("User is not associated with a project");
  }

  const task = await Task.create({
    name,
    status,
    priority,
    asignee,
    startDate,
    targetDate,
    description,
    userId: req.user.id,
    projectId: userProject.id,
  });

  if (task) {
    res.status(201).json(task);
  } else {
    res.status(400);
    throw new Error("Invalid project data");
  }
});

// @desc Update task
// @route PUT /api/tasks/:id
// @access Private/Developer
const updateTask = asyncHandler(async (req, res) => {
  const {
    name,
    status,
    priority,
    asignee,
    startDate,
    targetDate,
    project,
    attachments,
    description,
    subtask,
    activity,
    projectId,
  } = req.body;

  const task = await Task.findByPk(req.params.id);

  if (task) {
    task.name = name;
    task.status = status;
    task.priority = priority;
    task.asignee = asignee;
    task.startDate = startDate;
    task.targetDate = targetDate;
    task.project = project;
    task.attachments = attachments;
    task.description = description;
    task.subtask = subtask;
    task.activity = activity;
    task.projectId = projectId;

    const updateTask = await task.save();

    res.json(updateTask);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

// @desc Delete task
// @route DELETE /api/tasks/:id
// @access Private/Developer
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (task) {
    await Task.destroy({ where: { id: task.id } });

    res.status(200).json({ message: "Task deleted" });
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

export { getTasks, getTaskById, createTask, updateTask, deleteTask };
