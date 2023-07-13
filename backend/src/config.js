const mysql = require("mysql2");

const config = {
    // info for connection with database
    db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "bidroom_v1"
    }
};


module.exports = config;