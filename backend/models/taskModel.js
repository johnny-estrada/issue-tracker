import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const Task = sequelize.define("Task", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
  },
  startDate: {
    type: DataTypes.STRING,
  },
  targetDate: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

Task.sync()
  .then(() => {
    console.log("Task table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default Task;
