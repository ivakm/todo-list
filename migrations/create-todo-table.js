// TODO I left it as an example so it should be removed in the future
"use strict";

const CreateTodoTable = `
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL
        text VARCHAR(255) NOT NULL
        creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`;

module.exports = CreateTodoTable;
