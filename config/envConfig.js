import env from "dotenv"
env.config()

const dbUri = String(process.env.DB_URI)
const portNum = String(process.env.PORT)
export {dbUri,portNum} ;