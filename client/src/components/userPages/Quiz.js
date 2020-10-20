import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { updateUserPoints } from '../../actions';

import Definition from './Definition';

import { quiz } from '../../sass/Quiz.module.scss';
import { btn, btn__large, btn__blue } from '../../sass/Buttons.module.scss';

const Quiz = ({words, points, currentUserId, updateUserPoints}) => {
    const [currentWord, setCurrentWord] = useState(null);
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        selectNewWord();
    },[]);

    const selectNewWord = () => {
        const num1 = getRandomNumber(words.length-1);
        const word = words[num1];
        setCurrentWord(word); 
    }

    const onWordSubmit = (event, currentWord, points, currentUserId) => {
        event.preventDefault();
        if(currentWord.id.toLowerCase() === answer.toLowerCase()) {
            setResult('Correct 🤩');
            updateUserPoints(points, currentUserId);
            selectNewWord();
            setAnswer('');
        } else {
            setResult('Try Again');
        }
    }

    const getRandomNumber = (max) => Math.round(Math.random() * (max-0)+0);

    return (
        <div className={quiz}>
            <h2>Guess the word.</h2>
            <hr />
            {currentWord !== null && currentWord !== undefined ? (
                <>
                <div>
                    {result}
                </div>
                <form onSubmit={(event) => onWordSubmit(event, currentWord, points, currentUserId)}>
                    <input value={answer} placeholder={`Hint: begins with ${currentWord.id[0]}`} onChange={(e) => setAnswer(e.target.value)} autoFocus/>
                </form>
                <div>
                    <button onClick={(event) => onWordSubmit(event, currentWord, points, currentUserId)} className={`${btn} ${btn__blue} ${btn__large}`}>Submit</button>
                    <button onClick={() => selectNewWord()} className={`${btn} ${btn__blue} ${btn__large}`}>Skip</button>
                </div>
                <Definition word={currentWord}/> 
                </>) : null}
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        words: state.words, 
        points: state.auth.points, 
        currentUserId: state.auth.userId 
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         updateUserPoints: async () => dispatch(updateUserPoints())
//     }
// }

export default connect(mapStateToProps, { updateUserPoints })(Quiz);

