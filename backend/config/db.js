import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MYSQL_URI;

const sequelize = new Sequelize(uri, {});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
  process.exit(1);
}

export default sequelize;
