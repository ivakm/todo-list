"use strict";

const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoute");
const signupRoutes = require("./routes/signupRoutes");

require("dotenv").config();
app.use(express.json());

app.use("/todo", todoRoutes);
app.use("/signup", signupRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
