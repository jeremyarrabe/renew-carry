const { Sequelize } = require('sequelize');

const username = 'admin';
const password = 'admin';
const host = '172.18.0.3';
const port = 5432;
const databaseName = 'test';

const sequelize = new Sequelize(
  `postgres://${username}:${password}@${host}:${port}/${databaseName}`,
  {
    dialectModule: require('pg'),
    logging: false,
  },
);

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

module.exports = { sequelize };
