import TodoItem from './TodoItem'

const TodoItems=({ todoItems }  )=> {
   
    return <div className="container">
        {todoItems.map((item, index) =>(<TodoItem key={ index} dueDate={item.dueDate} todoName={item.todoName} /> ))}        
           </div>
}

export default TodoItems;