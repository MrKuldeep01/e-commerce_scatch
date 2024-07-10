import env from "dotenv";
env.config();

const dbUri = String(process.env.DB_URI);
const portNum = String(process.env.PORT);
const node_env = String(process.env.NODE_ENV);
export { dbUri, portNum, node_env };
