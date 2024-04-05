import { useSelector } from 'react-redux'

const DisplayCounter = () => {
  const counterObj = useSelector((store) => store.counter)
  const counter = counterObj.counterVal
  return (
    <p className="lead mb-4">{`the counter current value is :${counter}`}</p>
  )
}

export default DisplayCounter
