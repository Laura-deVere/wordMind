import React from 'react';
import { connect } from 'react-redux';


import Avatar from "../Avatar";

import { stats, statusBar, text__header, text_secondary } from '../../sass/UserPage.module.scss'

const Stats = ({ userName, points, wordsCompleted, totalWords }) => {
    return (
        <ul className={stats}>
            <li><Avatar /></li>
            <li><span className={text_secondary}>{userName}</span></li>
            <li>
                <span className={text__header}>Completed</span>
                <span className={text_secondary}>{wordsCompleted}/{totalWords}</span>
                <div className={statusBar}></div>
            </li>
            <li>
                <span className={text__header}>{points}</span>
                <span className={text_secondary}>Points</span> 
            </li>
            {/* <li>Average time per word: N/A</li> */}
        </ul>
    )
}

const mapStateToProps = state => {
    return { 
        averageTimePerWord: state.auth.averageTimePerWord,
        points: state.auth.points,
        wordsCompleted: state.auth.wordsCompleted,
        totalWords: state.words.length,
        userName: state.auth.userName
    }
}
export default connect(mapStateToProps)(Stats);