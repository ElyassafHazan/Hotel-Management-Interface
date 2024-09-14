const sequelize = require('./db.js');
const userTable = require('./table.js');

// Sync models (create tables)
(async () => {
  try {
    await sequelize.sync({ force: true }); // force: true will drop the table if it exists
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
})();