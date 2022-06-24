import React from "react";

export type IProps = {
  state: number;
  setState: any;
};

const MessengerTab: React.FC<IProps> = ({ state, setState }: IProps) => {
  return (
    <div className="messenger-Tab d-flex flex-row align-itsms-center justify-content-between">
      <button
        className={state === 1 ? "active-Tab" : ""}
        onClick={() => setState(1)}
      >
        <span className="tab-Title me-2">Messages</span>
        <span className="tab-Amount">3</span>
      </button>
      <button
        className={state === 2 ? "active-Tab" : ""}
        onClick={() => setState(2)}
      >
        <span className="tab-Title">Tickets</span>
      </button>
      <button
        className={state === 3 ? "active-Tab" : ""}
        onClick={() => setState(3)}
      >
        <span className="tab-Title me-2">Group Chats</span>
        <span className="tab-Amount">12</span>
      </button>
    </div>
  );
};

export default MessengerTab;
