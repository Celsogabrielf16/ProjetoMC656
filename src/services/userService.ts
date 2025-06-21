import { User } from '../types/user'

export async function getUserByToken(token: string): Promise<User> {
  
  const res = await fetch('http://localhost:3001/user/me', {
    method: 'GET',
    headers: { 
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Falha ao autenticar');
  }
  
  return await res.json();
}