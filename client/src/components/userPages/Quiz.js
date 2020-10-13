import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import Definition from './Definition';

import { quiz } from '../../sass/Quiz.module.scss';
import { btn, btn__large, btn__blue } from '../../sass/Buttons.module.scss';

const Quiz = ({words}) => {
    const [currentWord, setCurrentWord] = useState(null);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        const num1 = getRandomNumber(words.length);
        const word = words[num1];
        setCurrentWord(word);     
        console.log(currentWord) 
    },[]);

    const onWordSubmit = () => {
        if(currentWord.id === answer.toLowerCase()) {
            console.log('Correct');
        }
    }

    const getRandomNumber = (max) => Math.round(Math.random() * (max-0)+0);

    return (
        <div className={quiz}>
            <h2>Guess the word.</h2>
            <hr />
            <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
            {currentWord !== null && currentWord !== undefined ? <Definition word={currentWord}/> : null}
            <button onClick={() => onWordSubmit()} className={`${btn} ${btn__blue} ${btn__large}`}>Submit</button>
        </div>
    )
}

const mapStateToProps = state => {
    return { words: state.words }
}
export default connect(mapStateToProps)(Quiz);

