const Button = (props) => {
  const {value,onClickHandler} = props;

  return (
    <button className="mp-button" onClick={onClickHandler}>{value}</button>
  )
}

export default Button;