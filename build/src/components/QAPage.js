import React from "react";
import QuestionList from "./QuestionList";
import "../styles/qaPage.css";
import QuestionAnswerList from "./QuestionAnswerList";


function QAPage() {
  return (
    <div className="qa-page">
      <div className="left-panel">
        <QuestionAnswerList />
      </div>
      <div className="right-panel">
        <QuestionList />
      </div>
    </div>
  );
}

export default QAPage;