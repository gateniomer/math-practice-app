const Button = (props) => {
  const {value,onClickHandler,className} = props;
  return (
    <button className={className +" mp-button"} onClick={onClickHandler}>{value}</button>
  )
}

export default Button;