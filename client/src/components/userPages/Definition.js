import React from 'react';

const Definition = ({word}) => {
    console.log(word)
    const getRandomNumber = (max) => Math.round(Math.random() * (max-0)+0);

    const getDefinition = (word) => {
        const num = getRandomNumber(word.word.data.length);
        const def = word.word.data[num].shortdef;
        console.log(def)
        return def.map((item, index) => {
            return (
                <li key={index}>
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