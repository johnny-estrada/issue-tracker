import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import bcrypt from "bcrypt";

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    photo: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["user", "admin", "manager", "developer"],
      defaultValue: "user",
    },
    title: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "inactive"],
      defaultValue: "active",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.beforeCreate(async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  } catch (error) {
    throw new Error("Error hashing the password.", error);
  }
});

// This hook checks if the password field has changed before hashing it again
User.beforeUpdate(async (user) => {
  if (user.changed("password")) {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
  }
});

User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

User.sync()
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default User;
