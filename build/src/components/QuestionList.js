import React from "react";
import { Link } from "react-router-dom";
import { qa } from "./questionData";
import "../styles/list.css"
function QuestionList() {
  return (
    <div>
      <h2>List of Questions</h2>
      <ul>
        {qa.map((q) => (
          <Link to='/addAnswer'><li key={q.id}>{q.question}</li></Link>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;