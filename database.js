const mysql = require('mysql2/promise');


//const database = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    password: '920108025659',
//    database: 'user_data',
//});

const database = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});


(async () => {
    try{
        const connection = await database.getConnection();
        console.log('Connected to MYSQL database.');
        connection.release();

    }catch(err) {
        console.error('Database connection failed');
    }
});

module.exports = database;