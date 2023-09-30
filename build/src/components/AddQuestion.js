import React, { useState } from "react";
import "../styles/addQ.css";
import { useNavigate } from "react-router-dom";
import { qa } from "./questionData";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  function handleAddQuestion(event) {
    event.preventDefault();
    if (question.trim() === "") {
      window.alert("Do not add empty questions.");
      return; 
    }

    var users = JSON.parse(localStorage.getItem("users"))
    console.log("Deepak",users)
    const newQuestion = {
      id: qa.length + 1,
      answeredBy: "xyz zbd",
      questionedBy: "fjdd dnn",
      question: question.trim(),
      answers: [],
      username: `${users[users.length-1].username}`,
      src: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99) + 1}.jpg` 
    };
     qa.push(newQuestion);
    console.log(qa)
    setQuestion(""); 
    alert("Your Queston Added Succesfully")
    navigate("/home")
  
  }
  

  const handleCancel = () => {
    
    navigate("/home");
  };

  return (
    <div className="add-question">
      <h2>Add Question</h2>
      <form onSubmit={handleAddQuestion}>
        <label htmlFor="question">Question:</label>
        <input
          className="input_text"
          type="text"
          id="question"
          placeholder="Type Your Question here ....."
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
        />
        <div className="button-container">
          <button type="submit">Add Question</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddQuestion;
