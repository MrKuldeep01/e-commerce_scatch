import express from "express"
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("products are enough ")    
})



export default route
