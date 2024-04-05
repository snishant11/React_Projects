import styles from './Item.module.css'

const Item = ({FoodItem}) => {
    return (
        <li className={`${styles['kg-item']} list-group-items`}>
            <span className={`${styles['kg-span']}`}>{FoodItem}
            </span>
            <button className={`${styles.button} btn btn-info`}
            onClick={()=>console.log(`item bought is ${FoodItem}`)}
            >Buy</button>
        </li>
    )
}

export default Item;