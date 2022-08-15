import Button from "../button/button";
import { MATH_OPERATIONS } from "../../utils/utils";
const MathOperationsBar = (props)=>{
  return(
    <div className="mathOperationsBar">
      <Button value='+' onClickHandler={()=>props.callback(MATH_OPERATIONS.sum)}/>
      <Button value='-' onClickHandler={()=>props.callback(MATH_OPERATIONS.subtract)}/>
      <Button value='x' onClickHandler={()=>props.callback(MATH_OPERATIONS.multiply)}/>
      <Button value=':' onClickHandler={()=>props.callback(MATH_OPERATIONS.divide)}/>
    </div>
  )
}

export default MathOperationsBar;