import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Project from "./projectModel.js";
import User from "./userModel.js";

const Task = sequelize.define(
  "Task",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["to do", "in progress", "backlog", "done"],
      defaultValue: "to do",
    },
    priority: {
      type: DataTypes.ENUM,
      values: ["low", "medium", "high"],
      defaultValue: "low",
    },
    asignee: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    targetDate: {
      type: DataTypes.DATE,
    },
    project: {
      type: DataTypes.STRING,
    },
    attachments: {
      type: DataTypes.JSON,
    },
    details: {
      type: DataTypes.TEXT,
    },
    subtask: {
      type: DataTypes.JSON,
    },
    activity: {
      type: DataTypes.JSON,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

const setupAssociations = () => {
  Task.belongsTo(User, { foreignKey: "userId" });
  Task.belongsTo(Project, { foreignKey: "projectId" });
};

export { setupAssociations };

Task.sync()
  .then(() => {
    console.log("Task table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Task;
