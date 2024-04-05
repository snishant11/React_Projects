import { useContext } from 'react'
import styles from './todoitem.module.css'
import { TodoItemsContext } from '../store/todo-items-stores'
const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext)
  return (
    <div className={`${styles.itemcontainer} row`}>
      <div className="col-5">{todoName}</div>
      <div className="col-5">{todoDate}</div>
      <div className="col-2">
        <button
          className={`${styles.button} btn btn-danger`}
          onClick={() => deleteItem(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
