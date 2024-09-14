const {userTable} = require('./table.js');
const findUser = async function(username){
    try{
   const user = await userTable.findOne({
        where:{
            username: username,
        }},{
            logging: false
        })
        return user;

    }catch(error){
        console.error("error finding user", error)
        return null;
    }
};
module.exports = {findUser};