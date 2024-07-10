import express from "express";
const app = express();
import { portNum } from "./config/envConfig.js";
import cookieParser from "cookie-parser";
import path from "path";
import db from "./config/dbConnection.js";
import { fileURLToPath } from "url";
// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("okay report!");
});
app.listen(portNum, () => {
  console.log("http://localhost:" + portNum);
});
