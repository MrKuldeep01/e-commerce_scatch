import express from "express"
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("owners are badass ")
})



export default route