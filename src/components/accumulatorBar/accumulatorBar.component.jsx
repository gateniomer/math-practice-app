import Button from "../button/button";

const AccumulatorBar = (props) => {
  return (
  <div className="accumulatorBar">
    <Button value={'x10'} onClickHandler={()=>props.callback(10)}/>
    <Button value={'x100'} onClickHandler={()=>props.callback(100)}/>
    <Button value={'x1000'} onClickHandler={()=>props.callback(1000)}/>
    <Button value={'new'} onClickHandler={()=>props.callback()}/>
  </div>
  )
}

export default AccumulatorBar;