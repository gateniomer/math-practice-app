const Alert = ({className, message}) =>{
  return(
    <div className={"alert-box "+ className}>
      <span className="alert-text">{message}</span>
    </div>
  )
}

export default Alert;