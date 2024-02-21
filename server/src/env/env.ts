import dotenv from 'dotenv';
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url()
});

export const env = envSchema.parse(process.env);