import Fastify from "fastify";

const app = Fastify({
  logger: true,
  bodyLimit: 1024 * 1024,
});

app.get("/health", async () => ({
  status: "ok",
  service: "routemitra-api",
  mode: "scaffold",
}));

app.get("/api/v1", async () => ({
  name: "RouteMitra API",
  version: "v1",
  implemented: ["health"],
  message:
    "This is a scaffold. Ride persistence, authentication, and booking endpoints are not implemented yet.",
}));

const port = Number(process.env.API_PORT ?? 4000);

try {
  await app.listen({ host: "0.0.0.0", port });
} catch (error) {
  app.log.error(error);
  process.exitCode = 1;
}
