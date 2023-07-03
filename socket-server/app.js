const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (client) => {
  client.on("chat", (data) => {
    io.emit("chat", `response : ${data}`);
  });
  client.on("disconnect", () => {});
});

server.listen(5000);
