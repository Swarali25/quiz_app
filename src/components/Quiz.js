import React from "react";
import { useState } from "react";


const questionsList = [
  {
    key: 1,
    question: "What is Capital of Maharashtra?",
    options: ["Nagpur", "Mumbai", "Kolkata", "Pune"],
    answer: "Mumbai",
  },
  {
    key: 2,
    question: "What is Capital of India?",
    options: ["New Delhi", "Mumbai", "Hyderabad", "Pune"],
    answer: "New Delhi",
  },
  {
    key: 3,
    question: "WWW stands for ?",
    options: [
      "World Whole Web",
      "Wide World Web",
      "Web World Wide",
      "World Wide Web",
    ],
    answer: "World Wide Web",
  },
  {
    key: 4,
    question: "Full form of URL is ?",
    options: [
      "Uniform Resource Locator",
      "Uniform Resource Link",
      "Uniform Registered Link",
      "Unified Resource Link",
    ],
    answer: "Uniform Resource Locator",
  },
  {
    key: 5,
    question: "What month of the year has 28 days?",
    options: ["January", "November", "All Months", "February"],
    answer: "All Months",
  },
];
export default function Quiz(props) {
  const [qNo, setQNo] = useState(1);
  const [testFinish, setTestFinish] = useState(false);
  const [marks, setMarks] = useState(0);
  
  let btnstyle = {
    width: "80%",
    color: props.mode === "dark" ? "white" : "black"
  };
  const checkAnswer = (optionNumber) => {
    if (qNo === 5) {
      setTestFinish(true);
      props.showAlert(
        "success",
        "Congratulations! You have successfully completed the Quiz"
      );
    }
    let result =
      questionsList[qNo - 1].answer ===
      questionsList[qNo - 1].options[optionNumber]
        ? true
        : false;
    if (result === true) {
      //console.log(result);
      setMarks(marks + 10);
    }
    if (qNo < 5) {
      setQNo(qNo + 1);
    }
  };
  const restartQuiz = () => {
    setTestFinish(false);
    setMarks(0);
    setQNo(1);
    props.showAlert("success", "Quiz is Restarted");
  };
  return (
    <div className="container my-4" style={{color: props.mode === "dark" ? "white" : "black"}}>
      <div className="d-flex align-items-center justify-content-center flex-column ">
        <h2>Quick Quiz</h2>
        <div
          className="box rounded p-3"
          style={{ backgroundColor: props.mode === "dark" ? "#353d4c" : "#3676f1", width: "50vw" }}
        >
          <div
            className="question"
            style={{ display: testFinish === true ? "none" : "block" }}
          >
            <h2>Q {qNo}/5</h2>
            <p style={{ fontWeight: "bold" }}>
              {questionsList.map((que) =>
                que.key === qNo ? que.question : false
              )}
            </p>
          </div>
          <div
            className={`options ${
              testFinish === false
                ? "d-flex align-items-center justify-content-center flex-column"
                : ""
            }`}
            style={{ display: testFinish === true ? "none" : "block" }}
          >
            <button
              className="btn my-2 btn-lg btn-block"
              style={btnstyle}
              onClick={() => {
                checkAnswer(0);
              }}
            >
              {questionsList.map((que) =>
                que.key === qNo ? que.options[0] : false
              )}
            </button>
            <button
              className="btn my-2 btn-lg btn-block"
              style={btnstyle}
              onClick={() => {
                checkAnswer(1);
              }}
            >
              {questionsList.map((que) =>
                que.key === qNo ? que.options[1] : false
              )}
            </button>
            <button
              className="btn my-2 btn-lg btn-block"
              style={btnstyle}
              onClick={() => {
                checkAnswer(2);
              }}
            >
              {questionsList.map((que) =>
                que.key === qNo ? que.options[2] : false
              )}
            </button>
            <button
              className="btn  my-2 btn-lg btn-block"
              style={btnstyle}
              onClick={() => {
                checkAnswer(3);
              }}
            >
              {questionsList.map((que) =>
                que.key === qNo ? que.options[3] : false
              )}
            </button>
          </div>
          <div
            className={`result ${
              testFinish === true
                ? "d-flex align-items-center justify-content-center flex-column"
                : ""
            }`}
            style={{ display: testFinish === true ? "block" : "none" }}
          >
            <h3>Quiz is completed</h3>
            <h4 style={{ color: marks > 30 ? "green" : "#e12929" }}>
              Marks scored are {marks}/ 50
            </h4>
            <h4>{marks > 30 ? "Well Scored! Keep it up" : "Try Again"}</h4>
            <button
              className="btn my-2 btn-lg btn-block"
              style={btnstyle}
              onClick={restartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
