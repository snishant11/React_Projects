import { useDispatch, useSelector } from 'react-redux'
import { bagsActions } from '../store/bagSlice'
import { GrAddCircle } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'

/* eslint-disable react/prop-types */
const HomeItem = ({ item }) => {
  const dispatch = useDispatch()
  const bagItem = useSelector((store) => store.bag)
  const elementFound = bagItem.indexOf(item.id) >= 0

  const handleAddToBag = () => {
    dispatch(bagsActions.addToBag(item.id))
  }

  const handleRemoveFromBag = () => {
    dispatch(bagsActions.removeFromBag(item.id))
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveFromBag}
        >
          <AiFillDelete />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <GrAddCircle />
          Add To Bag
        </button>
      )}
    </div>
  )
}

export default HomeItem
