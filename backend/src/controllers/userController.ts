import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { ErrorHandler } from '../utils/ErrorHandler';
import { extractUserIdFromToken } from '../utils/authUtils';

export class UserController {
  public static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await userService.login({ email, password });
      res.status(200).json({ token });
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await userService.register({ name, email, password });
      res.status(201).json(user);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async getUserById(req: Request, res: Response) {
    try {
      const userId = extractUserIdFromToken(req.headers.authorization);
      const user = await userService.getUserById(userId);
      res.status(200).json(user);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async listUserBikes(req: Request, res: Response) {
    try {
      const userId = extractUserIdFromToken(req.headers.authorization);
      const bikes = await userService.listUserBikes(userId);
      res.status(200).json(bikes);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async listUserRentals(req: Request, res: Response) {
    try {
      const userId = extractUserIdFromToken(req.headers.authorization);
      const rentals = await userService.listUserRentals(userId);
      res.status(200).json(rentals);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async listUserChats(req: Request, res: Response) {
    try {
      const userId = extractUserIdFromToken(req.headers.authorization);
      const chats = await userService.listUserChats(userId);
      res.status(200).json(chats);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }
}
