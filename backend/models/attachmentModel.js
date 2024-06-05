import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Attachment = sequelize.define(
  "File",
  {
    originalname: {
      type: DataTypes.STRING,
    },
    fieldname: {
      type: DataTypes.STRING,
    },
    mimetype: {
      type: DataTypes.STRING,
    },
    destination: {
      type: DataTypes.STRING,
    },
    filename: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.INTEGER,
    },
    taskId: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

export default Attachment;
