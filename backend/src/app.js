const express = require('express');
const app = express();
const userRoutes = require('./routes/userRouter');

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3001, () => console.log('API rodando na porta 3001'));
