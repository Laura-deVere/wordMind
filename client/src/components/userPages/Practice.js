import React from "react";
import CreateSentence from "./sentences/CreateSentence";

const Practice = ({ closePractice }) => {
  return (
    <div style={{ width: "100%" }}>
      Practice
      <CreateSentence />
      <button onClick={() => closePractice(false)}>Back</button>
    </div>
  );
};

export default Practice;
