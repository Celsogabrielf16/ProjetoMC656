import { Response } from 'express';

export class UserErrorHandler {
    static handleLoginError(error: unknown, res: Response) {
        if (error instanceof Error && error.message === 'Credenciais inválidas') {
        return res.status(401).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Erro interno no servidor ao fazer login' });
    }

    static handleRegisterError(error: unknown, res: Response) {
        if (error instanceof Error && error.message === 'Usuário já existe') {
        return res.status(409).json({ error: error.message });
        } else if (error instanceof Error && error.message === 'Erro ao fazer o cadastro') {
        return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Erro interno no servidor ao fazer o cadastro' });
    }

    static handleGetAllUsersError(error: unknown, res: Response) {
        if (error instanceof Error && error.message === 'Nenhum usuário encontrado') {
        return res.status(404).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Erro interno no servidor ao buscar todos os usuários' });
    }
}