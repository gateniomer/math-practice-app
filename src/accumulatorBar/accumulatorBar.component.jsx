import Button from "../components/button/button";

const AccumulatorBar = (props) => {
  return (
  <div className="accumulatorBar">
    <Button value={'10'} onClickHandler={()=>props.callback(10)}/>
    <Button value={'100'} onClickHandler={()=>props.callback(100)}/>
    <Button value={'1000'} onClickHandler={()=>props.callback(1000)}/>
  </div>
  )
}

export default AccumulatorBar;