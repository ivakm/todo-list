const db = require('../db');

const getAllTodos = async () => {
    const result = await db.query('SELECT * FROM todo');
    return result.rows;
};

const getTodoById = async (id) => {
    const result = await db.query('SELECT * FROM todo WHERE id = $1', [id]);
    return result.rows[0];
};

const createTodo = async (newTodo) => {
    const { text, title } = newTodo;
    const result = await db.query(
        'INSERT INTO todo (text, title) VALUES ($1, $2) RETURNING *',
        [text, title]
    );
    return result.rows[0];
};

const updateTodoById = async (id, newTodo) => {
    const { text, title } = newTodo;
    const result = await db.query(
        'UPDATE todo SET text = $1, title = $2 WHERE id = $3 RETURNING *',
        [text, title, id]
    );
    return result.rows[0];
};

const removeTodoById = async (id) => {
    const result = await db.query('DELETE FROM todo WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodoById,
    removeTodoById
};
