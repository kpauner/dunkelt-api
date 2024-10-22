import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(9999),
  LOG_LEVEL: z.enum(["trace", "debug", "info", "warn", "error", "fatal"]).default("info"),
});

export type Env = z.infer<typeof envSchema>;

function loadEnv(): Env {
  try {
    // eslint-disable-next-line node/no-process-env
    const env = envSchema.parse(process.env);
    return env;
  }
  catch (e) {
    const error = e as z.ZodError;
    console.error("Invalid environment variables:", error.flatten().fieldErrors);
    process.exit(1);
  }
}

const env = loadEnv();

export default env;
