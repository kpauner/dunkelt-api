import type { AppRouteHandler } from "@/lib/types";

import type { ListRoute } from "./threats.routes";

export const list: AppRouteHandler<ListRoute> = (c) => {
  return c.json({
    threats: [{
      id: "1",
      name: "Test Threat",
      description: "This is a test threat",
    }],
  });
};
