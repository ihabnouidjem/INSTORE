import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

function FAQQst({ qst }) {
  const [question, setQuestion] = useState({ state: false });
  return (
    <div
      className={`w-full flex flex-col items-center p-2 sm:p-3 rounded-lg sm:rounded-xl`}
    >
      <div className="w-full flex flex-row items-center justify-between text-zinc-900">
        <h6 className="h6 w-full overflow-hidden whitespace-nowrap text-ellipsis">
          {qst?.question && qst.question}
        </h6>
        <i
          onClick={() => setQuestion({ ...question, state: !question.state })}
          className={`icon-24 ${
            question.state
              ? "transition delay-0 rotate-45 duration-300"
              : "transition delay-0 rotate-[-45] duration-300"
          }`}
        >
          <BsPlusLg />
        </i>
      </div>
      <div
        className={`w-full text-gray-800 overflow-hidden ${
          question.state ? "mt-2 h-fit" : "h-0"
        }`}
      >
        <p className="p">{qst?.answer && qst.answer}</p>
      </div>
    </div>
  );
}

export default FAQQst;
