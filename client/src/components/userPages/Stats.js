import React from 'react';
import { connect } from 'react-redux';

import { stats } from '../../sass/UserPage.module.scss'

const Stats = ({averageTimePerWord,points,wordsCompleted}) => {
    return (
        <ul>
            <li>Words Completed: {wordsCompleted} - </li>
            <li>Points: {points} - </li>
            <li>Average time per word: N/A</li>
        </ul>
    )
}

const mapStateToProps = state => {
    return { 
        averageTimePerWord: state.auth.averageTimePerWord,
        points: state.auth.points,
        wordsCompleted: state.auth.wordsCompleted
    }
}
export default connect(mapStateToProps)(Stats);