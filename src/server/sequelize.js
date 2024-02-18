import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectModule: require('pg'),
  logging: false,
});

(async () => {
  try {
    await sequelize.sync(); // Automatically creates tables based on the models
    console.log('Sequelize synchronized successfully.');
  } catch (error) {
    console.error('Sequelize synchronization error:', error);
  }
})();
async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database error:', error);
  }
}

connectToDB();
