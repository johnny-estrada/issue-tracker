// Allows use async await without wrapping everything in try catch
import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";

// @desc Create project
// route PUT /api/projects
// @access Private
const createProject = asyncHandler(async (req, res) => {
    const {
      title,
      description,
      client,
      startDate,
      targetDate,
      team,
      hoursThisWeek,
      status,
      tasks,
    } = req.body;

    const project = await Project.create({
      title,
      description,
      client,
      startDate,
      targetDate,
      team,
      hoursThisWeek,
      status,
      tasks,
      userId: req.user.id,
    });

    if (project) {
      res
        .status(201)
        .json({
          id: project.id,
          title: project.title,
          description: project.description,
          client: project.client,
          startDate: project.startDate,
          targetDate: project.targetDate,
          team: project.team,
          hoursThisWeek: project.hoursThisWeek,
          status: project.status,
          tasks: project.tasks,
        });
    } else {
      res.status(400);
      throw new Error("Invalid project data");
    }
});

export { createProject };
