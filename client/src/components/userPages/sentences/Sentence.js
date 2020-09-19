import React from "react";

const Sentence = ({ sentence }) => {
  return (
    <div>
      <p>{sentence}</p>
      <button>Delete</button>
    </div>
  );
};
export default Sentence;
