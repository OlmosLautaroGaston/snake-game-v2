const SnakeLists = require("./snakeLists");
class Sockets {
  constructor(io) {
    this.io = io;
    this.snakeLists = new SnakeLists();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado");

      //Emitir al cliente conectado, todas las bandas actuales
      socket.emit("current-snakes", this.snakeLists.getSnakes());
      socket.on("direction", (direction) => {
        this.snakeLists.setDirection(direction);
      });
    });
  }
}

module.exports = Sockets;
