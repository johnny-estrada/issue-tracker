import sequelize from "../config/db.js";
import bcrypt from "bcrypt";
import User from "./userModel.js";
import Project from "./projectModel.js";
import Task from "./taskModel.js";
import Attachment from "./attachmentModel.js";

User.beforeCreate(async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  } catch (error) {
    throw new Error("Error hashing the password.", error);
  }
});

// Checks if the password field has changed before hashing it again
User.beforeUpdate(async (user) => {
  if (user.changed("password")) {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  }
});

User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Define model relationships
User.belongsTo(Project, { foreignKey: "userId" });
User.belongsToMany(Project, { through: "Project_Team" });
Project.belongsTo(User, { foreignKey: "userId" });
Project.belongsToMany(User, { through: "Project_Team" });
Task.belongsTo(User, { foreignKey: "userId" });
Task.belongsTo(Project, { foreignKey: "projectId" });
Attachment.belongsTo(Task, { foreignKey: "taskId" });
Attachment.belongsTo(User, { foreignKey: "userId" });

const setupModels = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("All tables created successfully!");
  } catch (error) {
    console.error("Unable to create tables: ", error);
  }
};

export { User, Project, Attachment, Task, setupModels };
