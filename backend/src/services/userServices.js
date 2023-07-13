const db = require("./db");
// const conn = await db.connection();

// isLogin function
async function isLogin(uname, pass) {

    // variables
    let value = "";
    let sql = `SELECT * FROM users WHERE uname = ? AND password = ?`;

    // execute query on db
    value = await db.execute(sql, [uname, pass]);

    if (value.length) {
        return value;
    } else {
        console.log(value.length);
        return 0;
    }
}

/* updateUserValue function */
async function updateUserValue(table, value, userId) {

    // variables
    let data = "";
    let sql = `UPDATE ${table} SET value = ? WHERE id = ?`;

    const userUpdate = await db.execute(sql, [value, userId]);
    
    data = userUpdate.changedRows;

    console.log("*************");
    return data;
}

// readLargeValue function
// async function readLargeValue() {

//     try {
//         // variables
//         let value = "";
//         let sql = `SELECT MAX(value) AS largeValue FROM users WHERE ?`;

//         // execute query on db
//         value = await db.query(sql, [1]); // problem

//         if (value.length) {
//             return value[0];
//         } else {
//             return 0;
//         }
//     } catch (err) {
//         return err;
//     }
// }
// for test
async function readLargeValue() {

    try {
        // variables
        let value = "";
        let sql = `SELECT MAX(value) AS largeValue FROM users WHERE ?`;

        // execute query on db
        value = await db.execute(sql, [1]);

        if (value.length) {
            return value[0];
        } else {
            return 0;
        }
    } catch (err) {
        return err;
    }
}



setInterval(() => {
    readLargeValue()
    .then((res) => console.log(res))
    .catch((rej) => {
        console.log(rej);
    });
}, 500)


// exports functions
module.exports = {
    isLogin,
    updateUserValue,
    readLargeValue
}