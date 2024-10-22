import { OpenAPIHono } from "@hono/zod-openapi";

import notFound from "@/middlewares/not-found";
import { pinoLoggerMiddleware } from "@/middlewares/pino-logger";

const app = new OpenAPIHono();

app.use("*", pinoLoggerMiddleware());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  return c.text("Error");
});

app.notFound(notFound);
export default app;
