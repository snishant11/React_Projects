const TextInput = ({handleKeyDown}) => {
   
    return <input type="text" placeholder="Enter item here"
    onKeyDown={handleKeyDown}/>
}

export default TextInput;