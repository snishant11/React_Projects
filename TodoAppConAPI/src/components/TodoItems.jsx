import { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoItemsContext } from '../store/todo-items-stores'

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext)

  return (
    <div className="conatiner text-center">
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.todoName}
          todoName={todoItem.todoName}
          todoDate={todoItem.todoDate}
        />
      ))}
    </div>
  )
}

export default TodoItems
