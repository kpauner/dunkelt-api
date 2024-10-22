import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/create-app";

const router = createRouter()
  .openapi(createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "Returns a friendly greeting",
      },
    },
  }), (c) => {
    return c.json({
      message: "Hello Hono!", // TRY CTRL+SPACE HERE AND GET AUTOCOMPLETE BASED ON THE CONTRACT YOU DEFINED ABOVE
    });
  });

export default router;
