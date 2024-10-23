import { createRoute, z } from "@hono/zod-openapi";

import jsonContent from "@/openapi/helpers/json-content";

const tags = ["Threats"];

export const list = createRoute({
  tags,
  method: "get",
  path: "/threats",
  responses: {
    200: jsonContent(z.object({
      threats: z.array(z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
      })),
    }), "Returns a list of threats"),
  },
});

export type ListRoute = typeof list;
