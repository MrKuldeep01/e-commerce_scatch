import express from "express";
const app = express();
import userModel from "./models/user.model.js";
import productModel from "./models/product.model.js";
import { portNum } from "./config/envConfig.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("okay report!");
});
app.listen(portNum, () => {
  console.log("http://localhost:" + portNum);
});
