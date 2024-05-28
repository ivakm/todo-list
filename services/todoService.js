"use strict";

const todoModel = require("../models/todoModel");

const getAllTodos = async () => {
    return await todoModel.getAllTodos();
};

const getTodoById = async (id) => {
    return await todoModel.getTodoById(id);
};

const createTodo = async (newTodo) => {
    return await todoModel.createTodo(newTodo);
};

const updateTodoById = async (id, newTodo) => {
    return await todoModel.updateTodoById(id, newTodo);
};

const removeTodoById = async (id) => {
    return await todoModel.removeTodoById(id);
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodoById,
    removeTodoById,
};
