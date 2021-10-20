import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password:'',
        clicked:false,
        validate:false
    }

    handleChange =(e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        console.log(this.state.password === "0000");
        this.setState({
            clicked:true,
            validate:this.state.password === "0000"
        })
    }
    
    render() {
        return(
            <div>
                <input type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? 
                    (this.state.validate?'success':'failure') : ''}/>
                <button onClick={this.handleButtonClick}>검증</button>
            </div>
        )
    }
}

export default ValidationSample;