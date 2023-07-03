import React from "react";
import ChatItem from "../ChatItem";
import { profileImageLink } from "../../fixtures";
import "./index.css";

const Main = () => {
  console.log(profileImageLink);
  return (
    <div className="main">
      <ChatItem profileLink={profileImageLink} text={"코딩 잘하는 법"} />
      <ChatItem profileLink={profileImageLink} text={"코딩 잘하는 법"} />
    </div>
  );
};

export default Main;
