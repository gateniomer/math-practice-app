import { Component } from "react";
import ButtonPad from "../buttonPad/buttonPad";

class Calculator extends Component{
  constructor(props){
    super(props);
    this.state={
      num1:0,
      num2:0,
      sign:'+',
      values:[],
      acc:10
    }
  }
  newExercise(sign){
    this.setState({
      num1:Math.floor(Math.random()*this.state.acc + 1),
      num2:Math.floor(Math.random()*this.state.acc + 1),
      sign
    })
  }
  onClickHandler = (e) => {
    switch(e.target.innerText){
      case 'ok':
        this.newExercise('+');
        this.setState({values:[]});
        break;
      case 'del':
        this.setState({values:[]});
        break;
      default:
        this.setState({values:[...this.state.values,e.target.innerText]})
    }
  }
  render(){
    {console.log('render',this.state.values);}
    return(
      <>
      <h1>Math Practice</h1>
      <h2>{this.state.num1} {this.state.sign} {this.state.num2} = </h2>
      <h1 className="mp-input-heading">{this.state.values}</h1>
      <ButtonPad onClickHandler={this.onClickHandler}/>
      <h1>History:</h1>
      {/* <List values={}/> */}
    </>
    )
  }
}

export default Calculator;