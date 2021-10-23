import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람'} ,
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);    // 추가될 값이 5부터(기존에 4개)
    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        // 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정
        // concat은 새로운 배열을 만들어 줌
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }
    const nameList = names.map(name => <li key={name.id}>{name.text}</li>)
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}        
            </ul>
        </>
    )
}

export default IterationSample;