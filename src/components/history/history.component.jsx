const History = ({history}) => {
  const historyReversed = history.slice().reverse();
  return (
  <div className="history">
    <h3>History:</h3>
    {historyReversed.map((item,acc) => <span key={acc}><span className="acc">{acc+1}</span> {item.exercise} <span className="num-of-tries">{item.numOfTries} trys</span></span>).reverse()}
  </div>
  )
}

export default History;