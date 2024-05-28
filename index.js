"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const todoRoutes = require("./routes/todoRoute");
app.use("/todo", todoRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
