import { UserToken } from '../types/user'

export async function login(email: string, password: string): Promise<UserToken> {
  
  const res = await fetch('http://localhost:3001/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('Login inválido');
  return await res.json();
}