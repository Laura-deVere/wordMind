/** @jsx jsx */
import useSound from "use-sound";
import { jsx, css } from "@emotion/core";

const Greeting = () => {
  const [play] = useSound('https://media.merriam-webster.com/audio/prons/en/us/mp3/h/hullo001.mp3');

  return (
    <div
      css={css`
        width: 60%;
        margin: 0 auto;
        border: 1px solid #bec0c4;
        border-radius: 5px;
        position: absolute;
        left: 20%;
        top: 151px;
        color: #484c54;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1em;
        -webkit-box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);
        -moz-box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);
        box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);
        @media (max-width: 420px) {
          width: 93%;
          left:0;
        }
      `}
    >
      <h1>Hello</h1>
      <button 
        onClick={play}
        className="mega-phone mega-phone--white">
        <ion-icon name="megaphone"></ion-icon>
      </button>
    </div>
  );
};

export default Greeting;
