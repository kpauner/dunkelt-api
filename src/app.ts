import createApp from "@/lib/create-app";

import configureOpenAPI from "./lib/configure-open-api";
import index from "./routes/index.route";
import threats from "./routes/threats/threats.index";

const app = createApp();

const routes = [
  index,
  threats,
];

configureOpenAPI(app);

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
