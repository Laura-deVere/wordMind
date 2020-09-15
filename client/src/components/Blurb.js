/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
const divstyle = {
  backgroundColor: "#4960c9",
  color: "#fff",
  width: "300px",
  margin: "0 auto",
};
const Blurb = () => {
  return (
    <div
      css={css`
        width: 60%;
        margin: 75px auto;
        @media (max-width: 420px) {
          width: 90%;
        }
      `}
    >
      Making sentences helps us put everything we have learned into action: so
      you have learned a new word and you understand when to use it. But for the
      brain to remember this word in the future, the best way to memorize is by
      using it.
      <br />
      <br />
      Make ten sentences that use different meanings of the word you want to
      learn or, if it is a verb, with different tenses. For example, if you want
      to remember the phrasal verb “to tidy up”, write: “Maria, you must tidy
      your room up”, “I have to tidy up before my friends come”, “Paul will
      watch TV after he finishes tidying up the kitchen”.
    </div>
  );
};
export default Blurb;
