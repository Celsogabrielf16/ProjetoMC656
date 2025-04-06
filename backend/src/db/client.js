const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://user:ArnOzYra9ZTxQ4qFJJdH4AsTc5gH5lo2@dpg-cvotgj7gi27c73atl000-a.oregon-postgres.render.com/bikes_gmit',
    ssl: {
        rejectUnauthorized: false,
    },
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;