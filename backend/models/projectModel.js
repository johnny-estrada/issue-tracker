import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./userModel.js";
import Task from "./taskModel.js";

const Project = sequelize.define(
  "Project",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    targetDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    team: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    hours: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "closed", "on hold"],
      defaultValue: "active",
    },
    tasks: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

const setupAssociations = () => {
  Project.belongsTo(User, { foreignKey: "userId" });
  Project.hasMany(Task, { foreignKey: "projectId" });
};

export { setupAssociations };

Project.sync()
  .then(() => {
    console.log("Project table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table: ", error);
  });

export default Project;
