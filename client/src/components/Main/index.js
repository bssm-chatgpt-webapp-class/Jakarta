import "./index.css";
import { profileImageLink } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = ({ chatMessages }) => {
  return (
    <div className="main">
      {chatMessages.map((message, idx) => {
        return (
          <ChatItem
            key={idx}
            profileLink={message.isMine ? profileImageLink : "/images/gpt.png"}
            text={message.message}
          />
        );
      })}
    </div>
  );
};

export default Main;
