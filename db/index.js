const pg = require('pg');
const { Client } = pg
const client = new Client({
    user: 'libbypieper',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'block36A',
})

module.exports = {
    query: (text, params) => client.query(text, params),
};
