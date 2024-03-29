import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component{
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }

    state = {
        cnt: this.props.min,
        inputValue: this.props.min
    };

    increase = () => {
        this.set(this.state.cnt + 1);
    }

    decrease = () => {
        this.set(this.state.cnt - 1);
    }

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        
        this.setState({
            cnt,
            inputValue: cnt
        });
    }

    setValue(newStr){
        this.setState({inputValue: newStr});
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    checkEnterKey = (e) => {
        if(e.keyCode === 13){
            this.applyValue();
        }
    }

    render(){
        return (
            <div>
                {this.props.min}<br/>
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue} 
                       onChange={(e) => this.setValue(e.target.value)} 
                       onBlur={this.applyValue}
                       onKeyUp={this.checkEnterKey}
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
};

export default Input;