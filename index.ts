import startServer from "./server.ts";

const app = await startServer();

for await (const req of app) {
  req.respond({ body: "Hello World\n" });
}
