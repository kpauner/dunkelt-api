import { createRouter } from "@/lib/create-app";

import * as handlers from "./threats.handlers";
import * as routes from "./threats.routes";

const router = createRouter()
  .openapi(routes.list, handlers.list);

export default router;
