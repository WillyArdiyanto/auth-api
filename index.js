const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//DB connection
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log("connected to DB"));

//Routes
const auth_route = require("./routes/auth");

//middleware
app.use(express.json());

//Route middleware
app.use("/api/user", auth_route);

app.listen(3000, () => console.log("Server is Up and Running"));
