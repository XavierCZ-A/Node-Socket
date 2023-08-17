import express from "express";
import { createServer } from "http"; // Importa createServer de http
import { Server } from "socket.io";

const app = express();
const server = createServer(app); // Crea un servidor HTTP usando express
const io = new Server(server);
const PORT = 3000;

//middlewares
app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
  })
  socket.on('send-message', ( payload, callback ) => {

    const id = 123456789;
    callback( id );

    socket.broadcast.emit('enviar-mensaje', payload );

})
});

server.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}/`);
});
