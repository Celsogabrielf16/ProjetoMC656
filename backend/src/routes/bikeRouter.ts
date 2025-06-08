import { Router } from 'express'
import { BikeController } from '../controllers/bikeController';

const router = Router();

router.get('/', (req, res) => {
    BikeController.getAllBikes(req, res);
});

router.post('/', (req, res) => {
    BikeController.createBike(req, res);
});

export default router;