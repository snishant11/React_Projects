import { useDispatch } from 'react-redux'
import { useRef } from 'react'

const Controls = () => {
  const inputElement = useRef()
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleAdd = () => {
    dispatch({
      type: 'ADD',
      payload: {
        number: inputElement.current.value,
      },
    })
    inputElement.current.value = ''
  }
  const handleSubtract = () => {
    dispatch({
      type: 'SUBTRACT',
      payload: {
        number: inputElement.current.value,
      },
    })
  }
  const handlePrivacy = () => {
    dispatch({
      type: 'PRIVACY_TOGGLE',
    })
  }
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" ref={inputElement} placeholder="Enter your number" />
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  )
}

export default Controls
