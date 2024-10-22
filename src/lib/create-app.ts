import type { PinoLogger } from "hono-pino";

import { OpenAPIHono } from "@hono/zod-openapi";

import notFound from "@/middlewares/not-found";
import onError from "@/middlewares/on-error";
import { pinoLogger } from "@/middlewares/pino-logger";
import serveEmojiFavicon from "@/middlewares/serve-emoji-favicon";

interface AppBindings {
  Variables: {
    logger: PinoLogger;
  };
}

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>();

  app.use("*", serveEmojiFavicon("🐱"));
  app.use("*", pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
