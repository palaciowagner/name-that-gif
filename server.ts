import { serve, Server } from "./deps.ts";

const startServer = async (): Promise<Server> => {
  const server = await serve({ port: 8000 });
  console.log("Server is up at >>>> http://localhost:8000/");
  return server;
};

export default startServer;
