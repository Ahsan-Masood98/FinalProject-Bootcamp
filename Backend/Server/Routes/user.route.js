const express=require("express")
const {registerUser,loginUser,}=require("../Controllers/user.controller")
const routes=express.Router()

routes.post("/register", registerUser);
routes.post("/login", loginUser);

module.exports=routes