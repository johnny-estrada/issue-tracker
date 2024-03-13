import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Task from "./taskModel.js";
import User from "./userModel.js";

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

const setupAssociations = () => {
  Attachment.belongsTo(Task, { foreignKey: "taskId" });
  Attachment.belongsTo(User, { foreignKey: "userId" });
};

const syncAttachmentTable = async () => {
  try {
    await sequelize.sync();
    console.log("Attachment table synchronized successfully!");
  } catch (error) {
    console.error("Unable to synchronize Attachment table: ", error);
  }
};

setupAssociations();
syncAttachmentTable();

export default Attachment;
