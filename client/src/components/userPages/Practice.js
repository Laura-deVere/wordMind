import React from "react";
import { Link } from "react-router-dom";
import CreateSentence from "./sentences/CreateSentence";

const Practice = () => {
  return (
    <div style={{ width: "100%" }}>
      Practice
      <CreateSentence />
      <Link to="/user/word">Back</Link>
    </div>
  );
};

export default Practice;
