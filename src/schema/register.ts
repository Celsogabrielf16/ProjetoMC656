import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(0),
  email: z.string().email().min(0),
  password: z.string().min(0),
});