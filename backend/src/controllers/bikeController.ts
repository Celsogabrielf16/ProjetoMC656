import { Request, Response } from 'express';
import * as bikeService from '../services/bikeService';
import { ErrorHandler } from '../utils/ErrorHandler';

export class BikeController {
    public static async getAllBikes(req: Request, res: Response) {
        try {
            const bikes = await bikeService.getAllBikes();
            res.status(200).json(bikes);
        } catch (error) {
            return ErrorHandler.handle(res, error);
        }
    }
}