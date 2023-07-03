import React from "react";
import { PlusIcon, HambugIcon } from "../../icons";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <HambugIcon />
      <div>New Chat</div>
      <PlusIcon />
    </div>
  );
};

export default Header;
