import "./index.css";
import { profileImageLink, chatgptResponse } from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = () => {
  return (
    <div className="main">
      <ChatItem profileLink={profileImageLink} text="코딩 잘하는 법" />
      <ChatItem profileLink="/images/gpt.png" text={chatgptResponse} />
    </div>
  );
};

export default Main;
