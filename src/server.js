import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/categories", () => {
        return ["Foods", "Teste"];
      });
    },
  });

  return server;
}
