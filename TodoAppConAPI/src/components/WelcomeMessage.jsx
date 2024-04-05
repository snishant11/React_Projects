import { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-stores'

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext)

  return <div>{todoItems.length === 0 && <h3>Enjoy your day</h3>}</div>
}

export default WelcomeMessage
