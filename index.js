const express = require("express");
const app = express();
const server = require("https").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

io.on("connection", (socket) => {
  const { id } = socket.client;
  console.log(`User connected: ${id}`);
});
