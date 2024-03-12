import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Task from "./taskModel.js";

const Attachment = sequelize.define('File', {
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
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true,
});

const setupAssociations = () => {
  Attachment.belongsTo(Task, { foreignKey: "taskId" });
};

export { setupAssociations };

Attachment.sync()
  .then(() => {
    console.log("Attachment table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table: ", error);
  });

export default Attachment;
