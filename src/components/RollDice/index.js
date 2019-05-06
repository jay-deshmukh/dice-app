import React , { Component } from 'react';
import Die from '../Die';
import './RollDice.css'

class RollDice extends Component {
  static defaultProps = {
    slides : ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props){
    super(props);
    this.state = {
      dice1: 'one',
      dice2: 'five',
      rolling: false,
    }
  }
  
  roll = () => {
    const dice1 = this.props.slides[
      Math.floor(Math.random() * this.props.slides.length)
    ]
    const dice2 = this.props.slides[
      Math.floor(Math.random() * this.props.slides.length)
    ]
    this.setState({dice1,dice2, rolling: true})
    setTimeout(() => {
      this.setState({rolling : false})
    }, 1000);
  }

  render(){
    return(
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.dice1} rolling={this.state.rolling}/>
          <Die face={this.state.dice2} rolling={this.state.rolling}/>
        </div>
        <button onClick = {this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling ....' : 'Roll Dice !'}
        </button>
      </div>
    )
  }
}

export default RollDice;