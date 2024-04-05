import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import TodoHeading from './components/TodoHeading'
import AddTodos from './components/AddTodos'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'
import { TodoItemsContext } from './store/todo-items-stores'
// import Container from './components/Container'
function App() {
  const [todoItems, setTodoitems] = useState([])
  const addNewItem = (item, date) => {
    setTodoitems((currValue) => [
      ...currValue,
      { todoName: item, todoDate: date },
    ])
  }

  const deleteItem = (todoName) => {
    console.log(`item deleted ${todoName}`)
    let newTodoItem = todoItems.filter(
      (todoItem) => todoItem.todoName != todoName
    )
    setTodoitems(newTodoItem)
  }
  //const defaultTodo = [{ todoName: 'Buy GHee', todoDate: 'Today' }]
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      <center className="container">
        <TodoHeading />
        <AddTodos />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  )
}

export default App
