import { Request, Response } from 'express';
import * as userService from '../services/userService';
import { UserErrorHandler } from '../utils/userErrorHandler';

export class UserController {
  public static async login(req: Request, res: Response) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const token = await userService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      return UserErrorHandler.handleLoginError(error, res);
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
      return UserErrorHandler.handleRegisterError(error, res);
    }
  }

  public static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return UserErrorHandler.handleGetAllUsersError(error, res);
    }
  }
}