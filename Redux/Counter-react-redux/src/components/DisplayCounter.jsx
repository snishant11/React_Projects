import { useSelector } from 'react-redux'

const DisplayCounter = () => {
  const number = useSelector((store) => store.counter)
  return (
    <p className="lead mb-4">{`the counter current value is :${number}`}</p>
  )
}

export default DisplayCounter
