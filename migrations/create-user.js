"use strict";

const user = `
    CREATE TABLE users
    (
        user_id    SERIAL PRIMARY KEY,
        login      VARCHAR(255) NOT NULL,
        password   CHAR(60)     NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
`;

module.exports = user;
