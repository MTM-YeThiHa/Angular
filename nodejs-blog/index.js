const express = require ("express")
const cors = require ("cors")
const morgan = require("morgan")
const low = require("lowdb")

const PORT = process.env.PORT || 5000;

const FileSync = require("lowdb/adapters/FileSync")

const adapter = new FileSync("db.json")
const db = low(adapter)

db.defaults({ articles: [] }).write()

const app = express()

app.db = db;

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.listen(port, () => console.log(`The server is running on port ${PORT}`))