import { OpenAPIHono } from "@hono/zod-openapi";

import type { AppBindings } from "@/lib/types";

import notFound from "@/middlewares/not-found";
import onError from "@/middlewares/on-error";
import { pinoLogger } from "@/middlewares/pino-logger";
import serveEmojiFavicon from "@/middlewares/serve-emoji-favicon";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
  });
}

export default function createApp() {
  const app = createRouter();

  app.use("*", serveEmojiFavicon("🐱"));
  app.use("*", pinoLogger());

  app.notFound(notFound);
  app.onError(onError);

  return app;
}
