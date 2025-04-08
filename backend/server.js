const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configuração do banco PostgreSQL
const client = new Client({
  connectionString: 'postgresql://user:ArnOzYra9ZTxQ4qFJJdH4AsTc5gH5lo2@dpg-cvotgj7gi27c73atl000-a.oregon-postgres.render.com/bikes_gmit',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect()
  .then(() => console.log('🟢 Connected to PostgreSQL'))
  .catch(err => console.error('🔴 Connection error:', err.stack));

// Rota de login
app.post('/user/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await client.query(query, [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = result.rows[0];

    if (user.password !== password) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email
    });

  } catch (err) {
    console.error('Erro ao fazer login:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota de registro
app.post('/user/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await client.query('SELECT * FROM public.users WHERE email = $1', [email]);
  
      if (existingUser.rows.length > 0) {
        return res.status(400).json({ message: 'E-mail já cadastrado' });
      }
  
      await client.query(
        'INSERT INTO public.users (name, email, password) VALUES ($1, $2, $3)',
        [name, email, password]
      );
  
      return res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (err) {
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });  

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
