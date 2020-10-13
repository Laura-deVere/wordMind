import React from 'react';

const Definition = ({word}) => {
    const getDefinition = (word) => {
        const def = word.word.data[0].shortdef;
        const fl = word.word.data[0].fl;
        return def.map((item, index) => {
            return (
                <li key={index}>
                    <p>{fl}</p>
                    <p>{item}</p>
                    <hr />
                </li>
            )
        })
    }

    return (
        <div>
            <h1>Hint: begins with {word.id[0]}</h1>
            <ul>
            {getDefinition(word)}
            </ul>
        </div>
    )
}

export default Definition;