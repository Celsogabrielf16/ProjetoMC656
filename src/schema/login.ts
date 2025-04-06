import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email().min(0),
  password: z.string().min(0),
});