socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

socket.on("connect", () => {
  console.log("Frontend connected:", socket.id);
});