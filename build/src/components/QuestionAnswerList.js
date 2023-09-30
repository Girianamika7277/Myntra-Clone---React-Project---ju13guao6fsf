import React, { useContext } from "react";
import "../styles/qaList.css";
import { FilteredDataContext } from "./Header";

function QuestionAnswerList() {
  const filteredQA = useContext(FilteredDataContext);

  return (
    <div className="quorabox">
      {filteredQA.map((q) => (
        <div key={q.id} className="quorabox_info">
          <div className="post-top-left">
            <img
              className="post-profile-image"
              src={q.src}
              alt=""
            />
            <span className="post-user-name">
              {q.username}
            </span>
          </div>
          <hr className="share-hr" />
          <div className="share-box">
            <div className="share-options">
              <h2>{q.question}</h2>
              <p>{q.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionAnswerList;
