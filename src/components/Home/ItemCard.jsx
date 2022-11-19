import { AddRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Items } from '../../store/Data';
import { actionType } from '../../store/reducer';
import { useStateValue } from '../../store/StateProvider';

let cartData = []
let totalPrice = 0

const ItemCard = ({ imgSrc, name, price, itemId }) => {
  const [isCart, setCart] = useState(null);
  const [{ total }, dispatch] = useStateValue()

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData
      })
    }
  }, [isCart, dispatch])

  useEffect(() => {
    totalPrice = total;
  }, [total])

  const addToCart = () => {
    setCart(Items.find(n => n.id === itemId))
    totalPrice += price
    dispatch({
      type: actionType.SET_TOTAL,
      total: totalPrice
    })
  }

  var preco = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return (
    <div className='itemCard' id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" className='itemImg' />
      </div>
      <div className="itemContent">
        <h3 className='itemName'>{name}</h3>
        <div className="bottom">
          <h3 className='price'>
            {preco}
          </h3>
          <i className="addtoCart" onClick={addToCart}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  )
}

export default ItemCard