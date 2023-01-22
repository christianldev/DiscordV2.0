import { Server } from "socket.io";
import verifyTokenSocket from "./middleware/authSocket.js";
import serverStore from "./serverStore.js";
import disconnectHandler from "./socketHandlers/disconnectHandler.js";
import newConnectionHandler from "./socketHandlers/newConnectionHandlres.js";

const registerSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  serverStore.setSocketServerInstance(io);

  io.use((socket, next) => {
    verifyTokenSocket(socket, next);
  });

  io.on("connection", (socket) => {
    newConnectionHandler(socket, io);
    socket.on("disconnect", () => {
      disconnectHandler(socket);
    });
  });
};

export default registerSocketServer;
