import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import { useState } from 'react';



function App() {
  
 
  let [todoItems, setTodoItems] = useState([])
  const handleClick = (item,date) => {
    setTodoItems([...todoItems,{todoName:item,dueDate:date}])
    item = '';
    date = '';
}
  return (
    <center className="Todo-container">
      <AppName />
      <AddTodo handleClick={handleClick}/>
      <div className="item-container">
        <TodoItems todoItems={ todoItems} />
    
      </div>

    </center>
  )
}

export default App
