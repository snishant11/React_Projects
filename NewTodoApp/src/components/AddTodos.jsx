import { useRef } from 'react';
import styles from './addtodo.module.css'
import { MdAddBox } from "react-icons/md";
const AddTodos = ({handleClick}) => {
    
    const newItemElement = useRef()
    const newDateElement = useRef()
    const handleTodo = () => {
        let item = newItemElement.current.value;
        let date = newDateElement.current.value;
        handleClick(item, date)
        newItemElement.current.value = '';
        newDateElement.current.value = '';
        console.log(item,date)
    }
   
    return <div className='row'>
    <div className="col-5" ><input type="text" ref={newItemElement} /></div>
    <div className="col-5"  ><input type="date"ref={newDateElement} /></div>
    <div className="col-2"><button className={`${styles.button} btn btn-success`} onClick={handleTodo}><MdAddBox /></button></div>
    </div>
}


export default AddTodos;