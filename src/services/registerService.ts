export async function registerUser(name: string, email: string, password: string): Promise<void> {
    const res = await fetch('http://localhost:3001/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Erro ao registrar usuário');
    }
  }
  