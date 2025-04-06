const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://user:ArnOzYra9ZTxQ4qFJJdH4AsTc5gH5lo2@dpg-cvotgj7gi27c73atl000-a.oregon-postgres.render.com/bikes_gmit', // Substitua por sua URL do Render
    ssl: {
        rejectUnauthorized: false, // Necessário para conexões seguras no Render
    },
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

client.query('SELECT * FROM public.users', (err, res) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log('Query result:', res.rows);
        client.end(); // Fechar a conexão após a consulta
    }
})

