import React from 'react';

class RandomNumber extends React.Component{

  updateNumber(){
    let value = Math.round(Math.random()*100);
    this.props.onUpdate(value);
  }

  constructor(){
    super();
    this.updateNumber = this.updateNumber.bind(this);
  }

  render(){
    return(
      <div>
        <hr />
        <span>RandomNumber s</span>
        <h1>number here : {this.props.number}</h1>
        <button onClick={this.updateNumber}>Randomize</button>
        <br />
        <span>RandomNumber e</span>
        <hr />
      </div>
    );
  }
}

export default RandomNumber;
