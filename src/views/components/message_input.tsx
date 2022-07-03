import React from "react";
import { IconAttach, IconSend } from "../../assets";

export type IProps = {
  onClick(): void;
};

const MessageInput: React.FC<IProps> = ({ onClick }: IProps) => {
  return (
    <div className="message-input d-flex flex-row align-items-center justify-content-between">
      <div className="file-input pe-4">
        <label htmlFor="fileInput">
          <img src={IconAttach} alt="attach" />
        </label>
        <input type={"file"} id="fileInput" className="d-none" />
      </div>
      <input
        type={"text"}
        className="text-input"
        placeholder="Type your message here..."
      />
      <button onClick={onClick} className="ps-3">
        <img src={IconSend} alt="send" />
      </button>
    </div>
  );
};

export default MessageInput;
