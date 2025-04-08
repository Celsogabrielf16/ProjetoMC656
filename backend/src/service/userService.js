const client = require('../db/client');
const jwt = require('jsonwebtoken');

exports.login = async (email, password) => {
  const result = await client.query('SELECT * FROM public.users WHERE email = $1', [email]);
  const user = result.rows[0];

  if (!user || !(password == user.password)) {
    throw new Error('Credenciais inválidas');
}

const token = jwt.sign({ id: user.id, email: user.email }, 'MC656', { expiresIn: '30d' });
return token;
};

exports.getAllUsers = async () => {
    try {
        const result = await client.query('SELECT * FROM public.users');
        return result.rows;
    } catch (err) {
        throw new Error('Erro ao buscar usuários');
    }
}