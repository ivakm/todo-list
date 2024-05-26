const todoService = require('../services/todoService');

const getAllTodos = async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error getting todos", error: error.message });
    }
}

const getTodoById = async (req, res) => {
    try {
        const todo = await todoService.getTodoById(req.params.id);

        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (e) {
        res.status(500).json({ message: "Error getting the todo by Id", error: e.message });
    }
}

const createTodo = async (req, res) => {
    try {
        const todo = await todoService.createTodo(req.body);

        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (e) {
        res.status(500).json({ message: "Error creating the todo", error: e.message });
    }
}

const updateTodoById = async (req, res) => {
    try {
        const todo = await todoService.updateTodoById(req.params.id, req.body);

        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (e) {
        res.status(500).json({ message: "Error updating the todo", error: e.message });
    }
}

const removeTodoById = async (req, res) => {
    try {
        const todo = await todoService.removeTodoById(req.params.id);

        if (todo) {
            res.json(todo);
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (e) {
        res.status(500).json({ message: "Error removing the todo", error: e.message });
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodoById,
    removeTodoById
}