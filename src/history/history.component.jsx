const History = ({history}) => {
  return (
  <div className="history">
    <h2>History:</h2>
    {history.map((item,acc) => <h3 key={acc+1}>[{acc+1}] {item.exercise} | {item.numOfTries} trys</h3>)}
  </div>
  )
}

export default History;