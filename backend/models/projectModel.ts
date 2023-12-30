import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Project = sequelize.define(
  "Project",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
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
      type: DataTypes.STRING,
      allowNull: true,
    },
    hoursThisWeek: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tasksList: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

Project.sync()
  .then(() => {
    console.log("Project table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table: ", error);
  });

export default Project;
