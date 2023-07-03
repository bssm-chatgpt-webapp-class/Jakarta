import { useState } from "react";
import { Header, Main, TextField } from "./components";
import "./reset.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("chat", (data) => {
  console.log(`data : ${data}`);
});
function App() {
  const [question, setQuestion] = useState();

  const sendChat = (message) => {
    socket.emit("chat", message);
  };

  return (
    <div className="App">
      <Header />
      <Main question={question} />
      <TextField sendChat={sendChat} />
    </div>
  );
}

export default App;
