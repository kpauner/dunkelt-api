import type { AppOpenAPI } from "./types";

import packageJson from "../../package.json";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "Dunkelt Hono API",
      version: packageJson.version,
    },
  });
}
