io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// ✅ Create HTTP server
const server = http.createServer(app);

// ✅ Attach socket to server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// ✅ Socket connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

// ✅ Start server (IMPORTANT: use server, not Server)
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});