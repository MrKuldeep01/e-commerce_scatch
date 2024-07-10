import express from "express"
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("users are good ")
})



export default route
