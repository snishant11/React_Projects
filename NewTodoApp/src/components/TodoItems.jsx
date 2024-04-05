import TodoItem from './TodoItem'

const TodoItems = ({ todoItems, handleDelete }) => {
    return <div>
      {todoItems.map(todoItem => <TodoItem key={todoItem.todoName} todoName={todoItem.todoName} todoDate={todoItem.todoDate} onDelete={handleDelete} />)}
  </div>
}

export default TodoItems;