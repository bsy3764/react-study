import React, {useState, useMemo, useCallback, useRef} from "react";

const getAverage = numbers => {
    console.log('평균값 계산');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    // 함수를 재사용하려면 useCallback을 사용
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    // const onChange = e => {
    //     setNumber(e.target.value);
    // }

    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('');
    // }

    // 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행
    // 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용
    // 숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를 사용
    const avg = useMemo(() => getAverage(list), [list]);

    return(
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b>{avg}
                {/* <b>평균값 : </b>{getAverage(list)} */}
            </div>
        </div>
    )
}

export default Average;