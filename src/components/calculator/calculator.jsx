import { Component } from "react";
import ButtonPad from "../buttonPad/buttonPad";
import Button from "../button/button";
import { MATH_OPERATIONS,ALERTS } from "../../utils/utils";
import MathOperationsBar from "../mathOperationsBar/mathOperationsBar.component";
import AccumulatorBar from "../../accumulatorBar/accumulatorBar.component";
import Alert from "../../alert/alert.component";
import History from "../../history/history.component";

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
    this.newExercise({});
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
    if (this.state.input===0) return;
    this.setState({input:Math.floor(this.state.input/10)});
  }
  onNumberHandler = (key) => {
    if(this.state.input>=1000000) return;
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

  mathOperationsBarHandler = (operation) => this.newExercise({mathOperation:operation});
  accumulatorBarHandler = (acc = this.state.acc) => {
    this.newExercise({acc})
  };
  
  render(){
    console.log();
    return(
      <>
      {this.state.alert.isActive ? <Alert message={this.state.alert.message}/> : ''}
      <h1 style={{"marginTop":"20px"}}>Math Practice PWA </h1>
      <h3 style={{"marginBottom":"20px"}}>math practice made simple 🤓</h3>
      <div className="calculator-grid">
        <h3 className="math-exercise">{Math.max(this.state.num1,this.state.num2)} {this.state.mathOperation.sign} {Math.min(this.state.num1,this.state.num2)} = ?</h3>
        <h2 className="mp-input-heading">{this.state.input ? Array.from(this.state.input.toString()).map((char,i)=><span key={i}>{char}</span>) : '...'}</h2>
        <MathOperationsBar callback={this.mathOperationsBarHandler}/>
        <AccumulatorBar callback={this.accumulatorBarHandler}/>
        <ButtonPad input={this.state.input} onClickHandler={this.onClickHandler}/>
      </div>
      <History history={this.state.history} />
    </>
    )
  }
}

export default Calculator;