const express = require('express');
const app = express();
const db = require('./db');
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        //  const result = await db.query("INSERT INTO todo (title, text) VALUES ('Test Title', 'This is a test text')");
        const result = await db.query("SELECT * FROM todo");
        res.json(result.rows);
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal error");
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${ PORT }`);
})