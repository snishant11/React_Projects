import { useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import './App.css'
import FoodItems from './components/FoodItems'
import "bootstrap/dist/css/bootstrap.min.css"
import TextInput from './components/TextInput'

function App() {
  
  const [foodItems, setFoodItems] = useState([])

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFood = e.target.value;
      e.target.value=""
      setFoodItems([...foodItems, newFood])
    
    }
    
}

  return (
    <Container>
      <h1>Healthy Food</h1>
      <TextInput handleKeyDown={handleKeyDown}/>
      <ErrorMessage items={ foodItems}/>
      <FoodItems items={ foodItems} />
    </Container>
  )
}

export default App
