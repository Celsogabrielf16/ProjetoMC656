import { Request, Response } from 'express';
import * as rentalService from '../services/rentalService';
import { ErrorHandler } from '../utils/ErrorHandler';
import { extractUserIdFromToken } from "../utils/authUtils";

export class RentalController {
  public static async getRentalByUserId(req: Request, res: Response) {
    try {
      const userId = extractUserIdFromToken(req.headers.authorization);
      const rentals = await rentalService.getRentalByUserId(userId);
      res.status(200).json(rentals);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async createRental(req: Request, res: Response) {
    try {
      const userId = extractUserIdFromToken(req.headers.authorization);
      const rentalData = { ...req.body, userId };
      const rental = await rentalService.createRental(rentalData);
      res.status(201).json(rental);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async updateRental(req: Request, res: Response) {
    try {
      const rentalId = parseInt(req.params.id, 10);
      const updatedRental = await rentalService.updateRental(rentalId);
      res.status(200).json(updatedRental);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }
}