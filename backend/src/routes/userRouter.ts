import { Router } from 'express'
import { UserController } from '../controllers/userController';

const router = Router();

router.get('/', (req, res) => {
    UserController.getAllUsers(req, res);
});

router.post('/login', (req, res) => {
    UserController.login(req, res);
});

router.post('/register', (req, res) => {
    UserController.register(req, res);
});

router.get('/me', (req, res) => {
    UserController.getUserById(req, res);
});

router.get('/me/bikes', (req, res) => {
    UserController.listUserBikes(req, res);
});

export default router;