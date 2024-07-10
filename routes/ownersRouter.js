import express from "express";
import { node_env } from "../config/envConfig.js";
import ownerModel from "../models/owner.model.js";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("owners are badass ");
});

if (node_env === "developement") {
  route.post("/create", async (req, res) => {
    const owners = await ownerModel.find();
    if (owners.length > 0) {
      res.status(503).send("service not available! Owner is already exist");
    } else {
        const {name,email,password} = req.body;
        const owner = await ownerModel.create({name,email,password})
        res.status(201).send(owner)
    //   res.send("welcome, aagA aap?");  
    }
  });
}else{
console.log("service not available! Owner is already exist");
}

export default route;