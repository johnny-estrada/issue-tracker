// Allows use async await without wrapping everything in try catch
import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";

// @desc Fetch all projects
// @route GET /api/projects
// @access Private
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.findAll();

  if (projects) {
    res.status(200).json(projects);
  } else {
    res.status(404);
    throw new Error("Projects not found");
  }
});

// @desc Fetch single project
// @route GET /api/projects/:id
// @access Private
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findByPk(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

// @desc Create a project
// @route POST /api/projects
// @access Private/Manager
const createProject = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    client,
    startDate,
    targetDate,
    team,
    hours,
    tasks,
  } = req.body;

  const project = await Project.create({
    title,
    description,
    client,
    startDate,
    targetDate,
    team,
    hours: hours || 0,
    status: "Active",
    tasks,
    userId: req.user.id,
  });

  if (project) {
    res.status(201).json(project);
  } else {
    res.status(400);
    throw new Error("Invalid project data");
  }
});

// @desc Update a project
// @route PUT /api/projects/:id
// @access Private/Manager
const updateProject = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    client,
    startDate,
    targetDate,
    team,
    hours,
    status,
    tasks,
  } = req.body;

  const project = await Project.findByPk(req.params.id);

  if (project) {
    project.title = title;
    project.description = description;
    project.client = client;
    project.startDate = startDate;
    project.targetDate = targetDate;
    project.team = team;
    project.hours = hours;
    project.status = status;
    project.tasks = tasks;

    const updateProject = await project.save();

    res.json(updateProject);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

// @desc Delete a project
// @route DELETE /api/projects/:id
// @access Private/Manager
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByPk(req.params.id);

  if (project) {
    await Project.destroy({ where: { id: project.id } });

    res.status(200).json({ message: "Project deleted" });
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
});

export {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
