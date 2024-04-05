import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import TodoHeading from './components/TodoHeading';
import AddTodos from './components/AddTodos';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './WelcomeMessage';
function App() {

  const [todoItems,setTodoitems]=useState([])
  const handleClick = (item,date) => {
    setTodoitems([...todoItems, { todoName: item, todoDate: date }])
  }

  const handleDelete = (todoName) => {
    console.log(`item deleted ${todoName}`)
    let newTodoItem = todoItems.filter(todoItem => todoItem.todoName != todoName)
    setTodoitems(newTodoItem)
  }


  return <div className="container text-center">
    <TodoHeading/>
    <AddTodos handleClick={handleClick} />
    {todoItems.length===0 && <WelcomeMessage />}
    <TodoItems todoItems={todoItems} handleDelete={handleDelete} />

  </div>

}



export default App;
