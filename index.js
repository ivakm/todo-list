"use strict";

const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoute");
const signupRoutes = require("./routes/signupRoutes");
const userUpdateRoutes = require("./routes/userUpdateRoutes");

require("dotenv").config();
app.use(express.json());

app.use("/todo", todoRoutes);
app.use("/signup", signupRoutes);
app.use("/user-update", userUpdateRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
