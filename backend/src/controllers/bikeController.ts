import { getBikeById, filterBike } from './../models/bikeModel';
import { Request, Response } from 'express';
import * as bikeService from '../services/bikeService';
import { ErrorHandler } from '../utils/ErrorHandler';
import { extractUserIdFromToken } from '../utils/authUtils';
import { BikeValidator } from '../validators/BikeValidator';

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

    public static async filterBike(req: Request, res: Response) {
        try {
            const { model, maxPrice, maxDistance, userLat, userLng } = req.query;

            const bikes = await bikeService.filterBike({
                model: model?.toString(),
                maxPrice: maxPrice ? parseFloat(maxPrice.toString()) : undefined,
                maxDistance: maxDistance ? parseFloat(maxDistance.toString()) : undefined,
                userLat: userLat ? parseFloat(userLat.toString()) : undefined,
                userLng: userLng ? parseFloat(userLng.toString()) : undefined,
            });

            res.status(200).json(bikes);
        } catch (error) {
            return ErrorHandler.handle(res, error);
        }
    }

    public static async createBike(req: Request, res: Response) {
        try {
            const userId = extractUserIdFromToken(req.headers.authorization);
            const bikePayload = { ownerId: userId, ...req.body }

            BikeValidator.validate(bikePayload)

            const bike = await bikeService.createBike(bikePayload);
            res.status(201).json(bike);
        } catch (error) {
            return ErrorHandler.handle(res, error);
        }
    }
}