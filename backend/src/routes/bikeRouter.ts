import { Router } from 'express'
import { BikeController } from '../controllers/bikeController';

const router = Router();

router.get('/', (req, res) => {
    console.log('Get all bikes request received:');
    BikeController.getAllBikes(req, res);
});

router.post('/', (req, res) => {
    BikeController.createBike(req, res);
});

router.get('/filter', (req, res) => {
    BikeController.filterBike(req, res);
});

router.get('/:id', (req, res) => {
    BikeController.getBikeById(req, res);
});

export default router;