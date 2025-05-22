import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { ErrorHandler } from '../utils/ErrorHandler';

export class UserController {
  public static async login(req: Request, res: Response) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const token = await userService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async register(req: Request, res: Response) {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.name;

      const user = await userService.register(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }

  public static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      return ErrorHandler.handle(res, error);
    }
  }
}
