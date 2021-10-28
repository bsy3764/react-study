import React, {useEffect, useState, useReducer} from "react";
import CustomHook from "./CustomHook";

const Info1 = () => {
    const [state, onChange] = CustomHook({
        name:'',
        nickname:''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange}/>
                <input name='nickname' value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름 :</b>{name}
                </div>
                <div>
                    <b>닉네임 :</b>{nickname}
                </div>
            </div>
        </div>
    )
}

/*
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info1 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })
    const {name, nickname} = state;
    const onChange = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name='name' value={name} onChange={onChange}/>
                <input name='nickname' value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름 :</b>{name}
                </div>
                <div>
                    <b>닉네임 :</b>{nickname}
                </div>
            </div>
        </div>
    )
}
*/

/*
const Info1 = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    
    // useEffect(() => {
    //     console.log('마운트될 때만 실행');
    // }, []);

    // useEffect(() => {
    //     console.log('name 변경 : ' + name);
    // }, [name])

    // useEffect(() => {
    //     console.log('랜더링 완료');
    //     console.log({
    //         name,
    //         nickname
    //     })
    // })

    useEffect(() => {
        console.log('effect의 name: ' + name);
        return () => {
            console.log('cleanup의 name: ' + name);
        }
    })

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름 :</b>{name}
                </div>
                <div>
                    <b>닉네임 :</b>{nickname}
                </div>
            </div>
        </div>
    )
};
*/

export default Info1;