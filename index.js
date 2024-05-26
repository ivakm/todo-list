const express = require('express');
const app = express();
const todo = require('./services/todo');
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const result = await todo.getTodoById(1);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal error");
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${ PORT }`);
})