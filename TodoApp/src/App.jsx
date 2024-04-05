import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
// import { useState } from 'react';



function App() {
  let items = [
    {
      todoName: 'Buy Milk',
      dueDate: "26/02/24"
    },
    {
      todoName: 'Go to College',
      dueDate: "26/02/24"
    }
  ]
 
  //let [todoItems, setTodoItems] = useState(items)

  return (
    <center className="Todo-container">
      <AppName />
      <AddTodo/>
      <div className="item-container">
        <TodoItems todoItems={ items} />
    
      </div>

    </center>
  )
}

export default App
