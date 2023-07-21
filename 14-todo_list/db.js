//C:\Users\Daniil\Documents\node\14-todo_list\db.js
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "0896",
    host: "localhost",
    port: 5432,
    database: "todo_list",
});

module.exports = pool;
