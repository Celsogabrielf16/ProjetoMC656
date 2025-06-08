import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter';
import bikeRouter from './routes/bikeRouter';
import rentalRouter from './routes/rentalRouter';

dotenv.config();

const server = express();

server.use(express.json());

server.use(cors({
    credentials: true,
    origin:[
        "http://localhost:3000"
    ]
}))

server.use('/user', userRouter);
server.use('/bike', bikeRouter);
server.use('/rental', rentalRouter);

server.listen(3001, () => console.log('API rodando na porta 3001'));