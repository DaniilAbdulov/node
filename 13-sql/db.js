const { password } = require("pg/lib/defaults");

const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "0896",
    host: "localhost",
    port: 5432,
    database: "postgres",
});

module.exports = pool;
