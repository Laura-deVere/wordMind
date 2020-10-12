import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import Definition from './Definition';

import { quiz } from '../../sass/Quiz.module.scss';

const Quiz = ({words}) => {
    const [currentWord, setCurrentWord] = useState(null);

    useEffect(() => {
        const num1 = getRandomNumber(words.length);
        const word = words[num1];
        setCurrentWord(word);      
    },[]);

    const getRandomNumber = (max) => Math.round(Math.random() * (max-0)+0);

    return (
        <div className={quiz}>
            <h2>Guess the word.</h2>
            <hr />
            <input />
            {currentWord !== null && currentWord !== undefined ? <Definition word={currentWord}/> : null}
        </div>
    )
}

const mapStateToProps = state => {
    return { words: state.words }
}
export default connect(mapStateToProps)(Quiz);

