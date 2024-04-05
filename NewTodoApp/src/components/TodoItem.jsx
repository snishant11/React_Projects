import styles from './todoitem.module.css'
const TodoItem = ({ todoName,todoDate,onDelete }) => {
    return <div className={`${styles.itemcontainer} row`}>
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2">
            <button className={`${styles.button} btn btn-danger`}
            onClick={()=>onDelete(todoName)}>Delete</button></div>
    </div>
}

export default TodoItem;