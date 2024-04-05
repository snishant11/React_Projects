
import './App.css'

function App() {
   let myButton=['c','1','2','+','3','4','-','5','6','*','7','8','/','9','0'] 
  return (
    <div className='calculator'>
      <input className='display' type="text" />
      <div className="buttonsContainer">
      {myButton.map(mybtn => <button className='button' key={mybtn}>{mybtn}</button>)}

      </div>
    </div>
  )
}

export default App
