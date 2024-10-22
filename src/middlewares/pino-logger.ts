import { pinoLogger } from "hono-pino";
import pino from "pino";
import pretty from "pino-pretty";

export function pinoLoggerMiddleware() {
  return pinoLogger({
    pino: pino(pretty()),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
