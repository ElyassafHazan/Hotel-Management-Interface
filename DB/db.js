//connect to database via sequelize;
const Sequelize = require('sequelize');
const {config} = require("../config.js");
const sequelize = new Sequelize(config.databaseName,config.databaseUsername,config.databasePassword,{
    host: config.host,
    dialect: config.dialect
});
(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Success! Connection Established.");
    }catch(err){
        console.log("Error! Failed to connect to database. Reason: ",err);
    }
})

module.exports = sequelize;