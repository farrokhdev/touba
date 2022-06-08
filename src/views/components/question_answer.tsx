import React, { useState } from "react";
import { IconArrowGreen } from "../../assets";

export type IProps = {
  text: any;
};

const QuestionAnswer: React.FC<IProps> = ({ text }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="question-Answer d-flex flex-column mb-3">
      <div className="question d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <span>Q</span>
          <span className="paragraph mx-4">{text.Q}</span>
        </div>
        <button
          onClick={() => setOpen(!isOpen)}
          className={isOpen ? "rotate-btn" : ""}
        >
          <img src={IconArrowGreen} />
        </button>
      </div>
      <div
        className={
          isOpen ? "answer  d-flex flex-row align-items-center " : "d-none"
        }
      >
        <span>A</span>
        <span className="paragraph mx-4">{text.A}</span>
      </div>
    </div>
  );
};

export default QuestionAnswer;
