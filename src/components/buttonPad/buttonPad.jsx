import { Component } from "react";
import Button from "../button/button";
import {Keys} from '../../utils/utils';

class ButtonPad extends Component  {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <div className="buttonpad-grid">
        {
          Keys.map(key => 
          <Button key={key} value={key} onClickHandler={(e)=>this.props.onClickHandler(e,key)}/>)
        }
        </div>
    )
  }
  
}

export default ButtonPad;