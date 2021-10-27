import React, {Component, useState} from "react";

import Average from "./Average1";

const App = () => {
  return <Average/>
}

/*
import Info1 from "./Info1";

const App = () => {
  return <Info1/>
}
*/

/*
import Info1 from "./Info1";

const App = () => {
  const [visible, setVisible] = useState(false);
  return(
    <div>
      <button onClick={() => {
        setVisible(!visible)
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <Info1/>}
    </div>
  )
}
*/

/*
import Counter1  from './Counter1';

const App = () => {
  return <Counter1/>
}
*/

/*
import LifeCycleSample  from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state ={
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}
*/

/*
import IterationSample from './IterationSample';

class App extends Component {
  render() {
    return(
      <IterationSample/>
    )
  }
}
*/

/*
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return(
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    )
  }
}
*/

/*
import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <ValidationSample/>
    );
  }
}
*/

/*
import EventPractice from './EventPractice';

const App = () => {
  return <EventPractice/>;
}
*/

/*
import Say from './Say';

const App = () => {
  return <Say/>
}
*/

/*
import Counter from './Counter';

const App = () => {
  return <Counter/>;
};
*/

/*
import './App.css';

function App() {
  const name = '리액트';
  return <div className="react">{name}</div>
}
*/

export default App;
