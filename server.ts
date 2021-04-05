import { serve, Server } from "./deps.ts";

const port = Deno.env.get("PORT") || "8000"

const startServer = async (): Promise<Server> => {
  const server = await serve({ port: parseInt(port) });
  console.log(`Server is up at >>>> http://localhost:${port}`);
  return server;
};

export default startServer;
