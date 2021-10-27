import React, {useReducer, useState} from "react";

// 리듀서
// 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수
function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter1 = () => {
    // useReducer(리듀서 함수, 리듀서 기본값)
    // state: 현재 가리키고 있는 상태
    // dispatch: 액션을 발생시키는 함수
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return(
        <div>
            <p>
                현재 값은 <b>{state.value}</b> 입니다.
            </p>
            {/* dispatch(action) : 리듀서 함수가 호출됨 */}
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+ 1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>- 1</button>
        </div>
    )
}

/*
const Counter1 = () => {
    const [value, setValue] = useState(0);

    return(
        <div>
            <p>
                현재 카운터1 값은 <b>{value}</b> 입니다.
            </p>
            <button onClick={() => setValue(value + 1)}>+ 1</button>
            <button onClick={() => setValue(value - 1)}>- 1</button>
        </div>
    )
}
*/

export default Counter1;