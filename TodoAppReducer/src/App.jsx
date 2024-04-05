import 'bootstrap/dist/css/bootstrap.min.css'
import TodoHeading from './components/TodoHeading'
import AddTodos from './components/AddTodos'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'
import TodoItemContextProvider from './store/todo-items-stores'

function App() {
  //const [todoItems, setTodoItems] = useState([])

  //const defaultTodo = [{ todoName: 'Buy GHee', todoDate: 'Today' }]
  return (
    <TodoItemContextProvider>
      <center className="container">
        <TodoHeading />
        <AddTodos />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemContextProvider>
  )
}

export default App
