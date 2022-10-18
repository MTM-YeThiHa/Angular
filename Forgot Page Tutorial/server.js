require ("dotenv").config();
const express = require("express");
const passwordReset = require("./routes/passwordReset");
const users = require("./routes/users")
const connection = require('./database/db');
const app = express();

connection();

app.use(express.json());

app.use("/api/users", users);
app.use("/api/password-reset", passwordReset);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log( `Listening on port ${port}...`));