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
}