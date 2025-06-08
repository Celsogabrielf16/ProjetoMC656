import { getBikeById } from './../models/bikeModel';
import { Request, Response } from 'express';
import * as bikeService from '../services/bikeService';
import { ErrorHandler } from '../utils/ErrorHandler';
import { extractUserIdFromToken } from '../utils/authUtils';

export class BikeController {
    public static async getAllBikes(req: Request, res: Response) {
        try {
            const bikes = await bikeService.getAllBikes();
            res.status(200).json(bikes);
        } catch (error) {
            return ErrorHandler.handle(res, error);
        }
    }

    public static async getBikeById(req: Request, res: Response) {
        try {
            const bikeId = parseInt(req.params.id, 10);

            if (isNaN(bikeId))
                return res.status(400).json({ error: 'ID inválido' });

            const bike = await bikeService.getBikeById(bikeId);
            res.status(200).json(bike);
        } catch (error) {
            return ErrorHandler.handle(res, error);
        }
    }

    public static async createBike(req: Request, res: Response) {
        try {
            const userId = extractUserIdFromToken(req.headers.authorization);
            const bike = await bikeService.createBike({ ownerId: userId, ...req.body });
            res.status(201).json(bike);
        } catch (error) {
            return ErrorHandler.handle(res, error);
        }
    }
}