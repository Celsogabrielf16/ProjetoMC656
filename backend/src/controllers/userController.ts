import { Request, Response } from 'express';
import * as userService from '../services/userService';

export class UserController {
  public static async login(req: Request, res: Response) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      const token = await userService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      if (error instanceof Error && error.message === 'Credenciais inválidas')
        return res.status(401).json({ error: error.message });

      res.status(500).json({ error: 'Erro interno no servidor ao fazer login' });
    }
  };

  public static async register(req: Request, res: Response) {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const password = req.body.name;

      const user = await userService.register(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error && error.message === 'Usuário já existe')
        return res.status(409).json({ error: error.message });
      
      else if (error instanceof Error && error.message === 'Erro ao fazer o cadastro')
        return res.status(400).json({ error: error.message });

      res.status(500).json({ error: 'Erro interno no servidor ao fazer o cadastro' });
    }
  };

  public static async getAllUsers(req: Request, res: Response) {
      try {
          const users = await userService.getAllUsers();
          return res.status(200).json(users);
      } catch (error) {
          if (error instanceof Error && error.message === 'Nenhum usuário encontrado') {
              return res.status(404).json({ error: error.message });
          }
          res.status(500).json({ error: 'Erro interno no servidor ao buscar todos os usuários' });
      }
  };
}