"use strict";

const profiler = `
    CREATE TABLE profiles
    (
        profile_id SERIAL PRIMARY KEY,
        user_id    INTEGER             NOT NULL,
        name       VARCHAR(255)        NOT NULL,
        surname    VARCHAR(255)        NOT NULL,
        email      VARCHAR(255) UNIQUE NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (user_id)
    );
`;

module.exports = profiler;
