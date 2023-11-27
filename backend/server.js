import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const uri = process.env.MYSQL_URI;
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(uri, {});

async function initialize() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initialize();
