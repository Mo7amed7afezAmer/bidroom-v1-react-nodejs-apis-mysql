const mysql = require("mysql2/promise");
const config = require("../config");


// async function connection() {
//     const con = await mysql.createConnection(config.db);
//     return con;
// }
// module.exports = { connection };

// connection db
// async function query(sql, params) {

//     const con = await mysql.createConnection(config.db); // problem
//     const result = await con.execute(sql, params, (err, res, f) => {
//         console.log(err);
//         console.log(res);
//         console.log(f);
//     });

//     return result;
// }

function createPool() {
    try {
      const mysql = require('mysql2');
  
      const pool = mysql.createPool({
        host: "sql9.freesqldatabase.com",
        user: "sql9632586",
        password: "Zud6egijnX",
        database: "sql9632586",
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0
      });
  
      const promisePool = pool.promise();
  
      return promisePool;
    } catch (error) {
      return console.log(`Could not connect - ${error}`);
    }
  }
  
  const pool = createPool();
  
  module.exports = {
    connection: async () => pool.getConnection(),
    execute: (...params) => pool.execute(...params)
  };



// module.exports = { query };
