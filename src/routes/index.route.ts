import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/create-app";
import jsonContent from "@/openapi/helpers/json-content";

const router = createRouter()
  .openapi(createRoute({
    tags: ["index"],
    method: "get",
    path: "/",
    responses: {
      200: jsonContent(z.object({
        message: z.string(),
      }), "Returns a friendly greeting"),
    },
  }), (c) => {
    return c.json({
      message: "Hello Hono!", // TRY CTRL+SPACE HERE AND GET AUTOCOMPLETE BASED ON THE CONTRACT YOU DEFINED ABOVE
    });
  });

export default router;
