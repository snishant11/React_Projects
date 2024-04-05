import { useContext, useRef } from 'react'
import styles from './addtodo.module.css'
import { MdAddBox } from 'react-icons/md'
import { TodoItemsContext } from '../store/todo-items-stores'
const AddTodos = () => {
  const newItemElement = useRef()
  const newDateElement = useRef()
  const { addNewItem } = useContext(TodoItemsContext)
  const handleTodo = () => {
    let item = newItemElement.current.value
    let date = newDateElement.current.value
    addNewItem(item, date)
    newItemElement.current.value = ''
    newDateElement.current.value = ''
    console.log(item, date)
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">
          <input type="text" ref={newItemElement} />
        </div>
        <div className="col-5">
          <input type="date" ref={newDateElement} />
        </div>
        <div className="col-2">
          <button
            className={`${styles.button} btn btn-success`}
            onClick={handleTodo}
          >
            <MdAddBox />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTodos
