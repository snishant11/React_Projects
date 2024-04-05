import { useReducer, createContext } from 'react'

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
})

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItem = currentTodoItems
  if (action.type == 'NEW_ITEM') {
    newTodoItem = [
      ...currentTodoItems,
      { todoName: action.payload.item, todoDate: action.payload.date },
    ]
  } else if (action.type == 'DELETE_ITEM') {
    newTodoItem = currentTodoItems.filter(
      (todoItem) => todoItem.todoName != action.payload.todoName
    )
    return newTodoItem
  }
  return newTodoItem
}
const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [])

  const addNewItem = (item, date) => {
    const newItemAction = {
      type: 'NEW_ITEM',
      payload: {
        item,
        date,
      },
    }
    dispatchTodoItems(newItemAction)
  }

  const deleteItem = (todoName) => {
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        todoName,
      },
    }
    dispatchTodoItems(deleteItemAction)
  }
  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  )
}

export default TodoItemContextProvider
