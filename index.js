const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');

require('dotenv').config();
app.use(express.json());

app.get('/', todoController.getAllTodos);
app.get('/:id', todoController.getTodoById);
app.post('/', todoController.createTodo);
app.put('/:id', todoController.updateTodoById);
app.delete('/:id', todoController.removeTodoById)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${ process.env.PORT }`);
})