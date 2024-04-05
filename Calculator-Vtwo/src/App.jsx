
import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
import {useState} from 'react'

function App() {
   const [calValue,setCalvalue]=useState('')
  let myButton = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/','=', '9', '0','.'] 
  
  const handleOnClick = (myBtn) => {
   try {
    if (myBtn == 'c') {
      setCalvalue('')
    } else if(myBtn == '=')
    {
      setCalvalue(eval(calValue))
    } else {
      setCalvalue(calValue+myBtn)
    }
   } catch (error) {
    setCalvalue('Error')
   } 
    
  }
  return (
    <div className='calculator'>
      <Display value={calValue} />
      <ButtonContainer myButton={myButton} handleOnClick={handleOnClick} />
    </div>
  )
}

export default App
