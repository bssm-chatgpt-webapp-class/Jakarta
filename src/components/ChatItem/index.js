import React from "react";

const ChatItem = ({ profileLink, text }) => {
  return (
    <div className="question">
      <img className="question-profile" src={profileLink} />
      <div>{text}</div>
    </div>
  );
};

export default ChatItem;
