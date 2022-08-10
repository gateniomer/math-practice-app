import { Component } from "react";
import ButtonPad from "../buttonPad/buttonPad";
import Button from "../button/button";
import { MATH_OPERATIONS,ALERTS } from "../../utils/utils";
import MathOpetaionsBar from "../mathOpetaionsBar/mathOpetaionsBar.component";
import AccumulatorBar from "../../accumulatorBar/accumulatorBar.component";
import Alert from "../../alert/alert.component";

class Calculator extends Component{
  constructor(props){
    super(props);
    this.state={
      num1:0,
      num2:0,
      answer:0,
      mathOperation:MATH_OPERATIONS.sum,
      input:0,
      acc:10,
      started:false,
      history:[],
      numOfTries:0,
      alert: {
        isActive:false,
        message:''
      }
    }
    
  }


  componentDidMount(){
    window.addEventListener('keydown',e=>{
      if(isFinite(e.key) && e.code !== 'Space')
        this.onNumberHandler(e.key);
      if(e.key==='Backspace'){
        this.onDelHandler();
      }
      if(e.key === 'Enter'){
        this.onOkHandler();
      }
    });
  }
  newExercise(additionalDetails){
    //checks if we changed math operation before calling new exercise
    const mathOperation = ('mathOperation' in additionalDetails) 
    ? additionalDetails.mathOperation
    : this.state.mathOperation;

    const acc = ('acc' in additionalDetails)
    ? additionalDetails.acc
    : this.state.acc;

    const num2 = Math.floor(Math.random()*acc + 1);
    const num1 = (mathOperation.sign === MATH_OPERATIONS.divide.sign)
    ? num2 * Math.floor(Math.random()*acc + 1)
    : Math.floor(Math.random()*acc + 1);

    this.setState({
      num1,
      num2,
      answer:mathOperation.do(num1,num2),
      input:0,
      numOfTries:0,
      ...additionalDetails
    }) 
   }
  
  onCorrectAnswer= ()=>{
    this.newExercise({
      history:[
        {
          exercise: `${this.state.num1} ${this.state.mathOperation.sign} ${this.state.num2} = ${this.state.answer}`,
          numOfTries:this.state.numOfTries + 1
      }
      ,...this.state.history],
      alert:{
        isActive:true,
        message:ALERTS.CORRECT
      }
    });
    setTimeout(()=>this.setState({alert:false}),1500);
  }
  onWrongAnswer = ()=>{
    this.setState({
      numOfTries:this.state.numOfTries+1,
      alert:{
        isActive:true,
        message:ALERTS.WRONG
      }
    })
    setTimeout(()=>this.setState({alert:false}),1500);
  }
  onOkHandler = () => {
    (this.state.input === this.state.answer) 
    ? this.onCorrectAnswer()
    : this.onWrongAnswer();
  }
  onDelHandler = () => {
    (this.state.input===0)
    ? this.newExercise({})
    : this.setState({input:Math.floor(this.state.input/10)});
  }
  onNumberHandler = (key) => {
    this.setState({input:this.state.input*10 + parseInt(key)})
  }
  //buttonpad click handler
  onClickHandler = (e,key) => {
    switch(key){
      case 'ok':
        this.onOkHandler();
        break;
      case 'del':
        this.onDelHandler();
        break;
      default:
        this.onNumberHandler(key);
    }
  }
  onKeyPressHandler = (e) => {
    console.log(e);
  }
  onStartHandler = () => this.newExercise({started:true});

  mathOpetaionsBarHandler = (operation) => this.newExercise({mathOperation:operation});
  accumulatorBarHandler = (acc) => this.newExercise({acc:acc});
  
  render(){
    {console.log('render',this.state.answer);}
    return(
      <>
      {this.state.alert.isActive ? <Alert message={this.state.alert.message}/> : ''}
      <h1>Math Practice</h1>
      {this.state.started ? 
        <>
        <h3>{Math.max(this.state.num1,this.state.num2)} {this.state.mathOperation.sign} {Math.min(this.state.num1,this.state.num2)} = ?</h3>
        <MathOpetaionsBar callback={this.mathOpetaionsBarHandler}/>
        <AccumulatorBar callback={this.accumulatorBarHandler}/>
        <h2 className="mp-input-heading">{this.state.input?this.state.input:'Enter Your Answer'}</h2>
        <ButtonPad input={this.state.input} onClickHandler={this.onClickHandler}/>
        <h2>History:</h2>
        {this.state.history.map((item,acc) => <h3 key={acc+1}>[{acc+1}] {item.exercise} | {item.numOfTries} trys</h3>)}
        </>
        :<Button className="start-btn" value="start" onClickHandler={this.onStartHandler}/>}

    </>
    )
  }
}

export default Calculator;