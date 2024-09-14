const sequelize = require('sequelize');
const {userTable} = require('./table.js');
async function insertNewUser(email,username,hashedPassword){
    try{
        const newUser = await userTable.create({
            id: null,
            username: username,
            password_hashed: hashedPassword,
            email: email,

        },{
            logging: false
        });
        console.log("new user added to DB: "+username+" created successfully:");
    }catch(err){
        console.log("error creating user "+err);

    }
};
module.exports = {insertNewUser};