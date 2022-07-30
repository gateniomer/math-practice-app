import { Component } from "react";
import ButtonPad from "../buttonPad/buttonPad";
import Button from "../button/button";

class Calculator extends Component{
  constructor(props){
    super(props);
    this.state={
      num1:0,
      num2:0,
      answer:0,
      sign:'+',
      input:0,
      acc:100,
      started:false,
      history:[]
    }
  }

  newExercise(sign,additionalDetails){
    const num1 = Math.floor(Math.random()*this.state.acc + 1);
    const num2 = Math.floor(Math.random()*this.state.acc + 1);
    this.setState({
      num1,
      num2,
      answer:num1+num2,
      input:0,
      ...additionalDetails
    })  }
  
  //buttonpad click handler
  onClickHandler = (e,key) => {
    switch(key){
      case 'ok':
        if(this.state.input === this.state.answer){
          console.log('winner!')
          this.newExercise('+',{
            history:[`${this.state.num1} + ${this.state.num2} = ${this.state.answer}`
            ,...this.state.history]
          });
        }else{
          console.log('try again!');
        }
        break;
      case 'del':
        this.setState({input:Math.floor(this.state.input/10)});
        break;
      default:
        this.setState({input:this.state.input*10 + parseInt(key)})
    }
  }
  onStartHandler = () => this.newExercise('+',{started:true});
  
  render(){
    {console.log('render',this.state.input);}
    return(
      <>
      <h1>Math Practice</h1>
      {this.state.started ? 
        <>
        <h3>{this.state.num1} {this.state.sign} {this.state.num2} = ?</h3>
        <h2 className="mp-input-heading">{this.state.input?this.state.input:'Enter Your Answer'}</h2>
        <ButtonPad onClickHandler={this.onClickHandler}/>
        <h2>History:</h2>
        {this.state.history.map((item,acc) => <h3 key={item}>[{acc+1}] {item}</h3>)}
        </>
        :<Button className="start" value="start" onClickHandler={this.onStartHandler}/>}

    </>
    )
  }
}

export default Calculator;