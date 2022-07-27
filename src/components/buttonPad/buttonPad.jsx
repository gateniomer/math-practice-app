import { Component } from "react";
import Button from "../button/button";

class ButtonPad extends Component  {
  constructor(props){
    super(props);
    this.keys = [0,1,2,3,4,5,6,7,8,9,"ok","del"];
  }
  render(){
    return (
      <div>
        <div className="grid">
        {
          this.keys.map(key=><Button key={key} value={key} onClickHandler={this.props.onClickHandler}/>)
        }
        </div>
      </div>
    )
  }
  
}

export default ButtonPad;