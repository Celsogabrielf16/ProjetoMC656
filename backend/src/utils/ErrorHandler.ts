import { Response } from 'express';

export class ErrorHandler {
  private static errorStatusMap: Record<string, number> = {
    'Credenciais inválidas': 401,
    'Usuário já existe': 409,
    'Erro ao fazer o cadastro': 400,
    'Nenhum usuário encontrado': 404,
  };

  public static handle(res: Response, error: unknown) {
    if (error instanceof Error) {
      const status = this.errorStatusMap[error.message] || 500;
      return res.status(status).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Erro interno no servidor' });
  }
}
