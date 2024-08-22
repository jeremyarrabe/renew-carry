import { Sequelize } from "sequelize";
import { config } from "./config";

export const sequelize = new Sequelize(config[process.env.NODE_ENV]);

async function connectToDB() {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to the database error:", error);
  }
}

(async () => {
  try {
    await sequelize.sync(); // Automatically creates tables based on the models
  } catch (error) {
    console.error("Sequelize synchronization error:", error);
  }
})();

connectToDB();
