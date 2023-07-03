import { useRef, useState } from "react";
import { SendIcon } from "../../icons";
import "./index.css";

const TextField = ({ setQuestion }) => {
  const inputRef = useRef();

  return (
    <div className="text-field">
      <input ref={inputRef} />
      <SendIcon
        onClick={() => {
          setQuestion(inputRef.current.value);
        }}
      />
    </div>
  );
};

export default TextField;
