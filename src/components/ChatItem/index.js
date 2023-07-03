import "./index.css";

const ChatItem = ({ profileLink, text }) => {
  return (
    <div className="chatitem">
      <img className="chatitem-profile" src={profileLink} />
      <pre>{text}</pre>
    </div>
  );
};

export default ChatItem;
