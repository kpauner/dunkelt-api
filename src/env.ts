import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(9999),
  LOG_LEVEL: z.enum(["trace", "debug", "info", "warn", "error", "fatal"]).default("info"),
  DATABASE_URL: z.string(),
  DATABASE_AUTH_TOKEN: z.string().optional(),
}).superRefine((input, ctx) => {
  if (input.NODE_ENV === "production" && !input.DATABASE_AUTH_TOKEN) {
    ctx.addIssue({
      code: z.ZodIssueCode.invalid_type,
      expected: "string",
      received: "undefined",
      path: ["DATABASE_AUTH_TOKEN"],
      message: "Must be set when NODE_ENV is 'production'",
    });
  }
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
