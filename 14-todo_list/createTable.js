//C:\Users\Daniil\Documents\node\14-todo_list\createTable.js
const pool = require("./db");

pool.query(
    "CREATE TABLE IF NOT EXISTS tasks(id SERIAL PRIMARY KEY,task TEXT NOT NULL)",
    (err, res) => {
        if (err) throw err;
        console.log(`Таблица создана`);
    }
);
