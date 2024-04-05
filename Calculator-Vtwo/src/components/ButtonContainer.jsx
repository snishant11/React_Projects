const ButtonContainer = ({myButton,handleOnClick}) => {
    return  <div className="buttonsContainer">
    {myButton.map(mybtn => <button className='button' key={mybtn} onClick={()=>handleOnClick(mybtn)}>{mybtn}</button>)}

    </div>
}

export default ButtonContainer;