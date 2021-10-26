import React, {Component} from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    // 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 마운트 과정에서도 호출
    // 업데이트가 시작하기 전에도 호출
    // props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용
    static getDerivedStateFromProps(nextProps, prevProps) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevProps.color) {
            return {color: nextProps.color};
        }
        return null;
    }

    // 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정
    // true 혹은 false 값을 반환해야 함
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4; // 마지막 자리 수가 4일 때는 업데이트를 취소
    }

    // 언마운트 과정에서 호출
    // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 컴포넌트의 업데이트 작업이 끝난 후 호출
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 전 직전 색성 : ', snapshot);
        }
    }

    // UI를 렌더링하는 메서드
    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return(
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;