const fs = require('fs');
const knex = require('knex');

async function connectMysql() {
    const mysqlPassword = await fs.promises.readFile('/run/secrets/mysql_password');
    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql', 
            user: 'user_datamigo',
            password: mysqlPassword,
            database: 'datamigo'
        }
    });
    return db;
}

module.exports = {
    connectMysql
};