import { Sequelize } from "sequelize";

const connectDB = async function initialize(uri) {
  const sequelize = new Sequelize(uri, {});

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
