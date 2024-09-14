//import db functions:
const {insertNewUser} = require('./DB/insert.js')
const {findUser} = require('./DB/read.js');
//set port:
const {port} = require('./config.js'); 
//import modules/packages:
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
//Express - Middleware:
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
 //api to serve 'port' variable to the client-side files:
app.get('/api/config', (req, res) => {
  res.status(200).json({ port });
});
 
// starting server:
app.listen(port,()=>{
  console.log( `Listening on port ${port}`);
});

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/views/login.html");
  app.use(express.static('views'));
})

//serve registeration files:
app.get("/reg",(req,res)=>{
  res.sendFile(__dirname + "/views/register.html");
  app.use(express.static('views'));
})


app.post('/register',(req,res)=>{
  const {formType,email,username,password} = req.body;
  //do something with the data:  
  const hashed = async function(){
    return new Promise((resolve,reject)=>{
    bcrypt.hash(password,10,(err,hash)=>{
        err? reject(err):null;
        hash?resolve(hash):null;
    })})
};
hashed().then((hash)=>{
  //insert new user into the db:
  insertNewUser(email,username,hash);
  res.status(200).json({ message: 'User registered successfully' });
}).catch(err => {
    console.log(err);
    res.status(500).json();
});});


app.post("/login", async (req,res)=>{
  const {formType,username,password} = req.body;
  try{
  const user = await findUser(username);
  if(!user){
    return res.status(404).json({message: "Username not found."});
  }
  bcrypt.compare(password,user.password_hashed,(error,result)=>{
    if(error){
      return res.status(500).json({message: "Error occured during password comparison."})
    }
    if(result){
      return res.status(200).json({message: "Correct! You are now logged in!"});
    }else{
      return res.status(403).json({message: "Correct username, incorrect password."});
    }
  });
}catch(error){
  return res.status(500).json({message: "internal server error. ",error: error.message});
}
});


//exports:
module.exports = {port};



