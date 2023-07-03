import "./index.css";
import { profileImageLink, chatgptResponse } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = ({ question }) => {
  return (
    <div className="main">
      <ChatItem profileLink={profileImageLink} text={""} />
      <ChatItem profileLink="/images/gpt.png" text={""} />
    </div>
  );
};

export default Main;
