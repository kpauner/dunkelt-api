import { OpenAPIHono } from "@hono/zod-openapi";

import { pinoLoggerMiddleware } from "./middlewares/pino-logger";

const app = new OpenAPIHono();

app.use("*", pinoLoggerMiddleware());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
