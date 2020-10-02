import React from "react";
const divstyle = {
  backgroundColor: "#4960c9",
  color: "#fff",
  width: "300px",
  margin: "0 auto",
};
const Blurb = () => {
  return (
    <div className="blurb">
      <h1>wordMind is a vocabulary builder.</h1>
      <br />
      <br />
      Making sentences helps us put everything we have learned into action: so
      you have learned a new word and you understand when to use it. But for the
      brain to remember this word in the future, the best way to memorize is by
      using it.
      <br />
      <br />
      {/* <br />
      <br />
      Make ten sentences that use different meanings of the word you want to
      learn or, if it is a verb, with different tenses. For example, if you want
      to remember the phrasal verb “to tidy up”, write: “Maria, you must tidy
      your room up”, “I have to tidy up before my friends come”, “Paul will
      watch TV after he finishes tidying up the kitchen”. */}
    </div>
  );
};
export default Blurb;
