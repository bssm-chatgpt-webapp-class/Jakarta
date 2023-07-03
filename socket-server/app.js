const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", (client) => {
  client.on("chat", (data) => {
    console.log(data);
  });
  client.on("disconnect", () => {});

  setInterval(() => {
    io.emit("chat", "hello");
  }, 1000);
});

server.listen(5000);
