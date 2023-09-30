import React, { useState } from "react";
import "../styles/addAns.css";
import { useNavigate } from "react-router-dom";
import { qa } from "./questionData";

function AddAnswer() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleAddAnswer = (event) => {
    event.preventDefault();

    if (selectedQuestion === "") {
      window.alert("Please select a question.");
      return;
    }


    qa[qa.length-1].answer = answer;
    // const updatedArray = qa.map((item) => {
    //   if(item.id == qa.length){
    //     return {...item, answer : answer.trim()}
    //   }
    //   return item
    // })

    // qa.push(updatedArray)
    // const copy = Array.from(qa);
    // const question = copy.find((q) => q.id === parseInt(selectedQuestion));
    // // if (!question) {
    // //   window.alert("Question not found.");
    // //   return;
    // // }
    // alert("Your Answer was submitted sucessfully")
    // const newAnswer = {
    //   id: Date.now(),
    //   answer: answer.trim(),
    // };
    // question.answers.push(newAnswer);
    // localStorage.setItem("qa", JSON.stringify(copy));

    console.log(qa)
    setAnswer(""); // clear input field
    // navigate("/home"); // redirect to main page
    // alert("Your Queston Added Succesfully")
    // navigate("/home")
    
    alert("Your Answer was submitted sucessfully")
    navigate("/home");
  };

  const handleCancel = () => {
    setAnswer("");
    navigate("/home");
  };

  return (
    <div className="add-answer">
      <h2>Add Answer</h2>
      <form onSubmit={handleAddAnswer}>
        <label htmlFor="question">Question:</label>
        <select
          id="question"
          value={selectedQuestion}
          onChange={(event) => setSelectedQuestion(event.target.value)}
        >
          <option value="">Select a question</option>
          {qa.map((q) => (
            <option key={q.id} value={q.id}>
              {q.question}
            </option>
          ))}
        </select>
        <label htmlFor="answer">Answer:</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        ></textarea>
        <div className="button_container">
          <button type="submit">Add Answer</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAnswer;
