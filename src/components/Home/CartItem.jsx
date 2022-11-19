import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../store/StateProvider';
import { actionType } from '../../store/reducer';

let cartItems = []
let totalPrice = 0

const CartItem = ({ name, imgSrc, price, itemId, rest }) => {
  const [qty, setQty] = useState(1);
  const [{ cart, total }, dispatch] = useStateValue()
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price))

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price))
    dispatch({
      type: actionType.SET_CART,
      cart: cartItems,
    });
  }, [qty, cart, price, itemPrice, dispatch])

  const updateQty = (action, id) => {
    totalPrice = total
    if (action === "add") {
      setQty(qty + 1);
      totalPrice = totalPrice + price
    } else {
      if (qty === 1) {
        cartItems = cartItems.filter(elem => elem.id !== id)
      } else {
        setQty(qty - 1);
      }
      totalPrice = totalPrice - price
    }
    dispatch({
      type: actionType.SET_CART,
      cart: cartItems,
    });
    dispatch({
      type: actionType.SET_TOTAL,
      total: totalPrice,
    });
  };

  return (
    <div className='cartItem'>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <p>{rest}</p>
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{qty}</span>
          <div className="quantity">
            <RemoveRounded className='itemRemove' onClick={() => updateQty('remove', itemId)} />
            <AddRounded className='itemAdd' onClick={() => updateQty('add', itemId)} />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className='dolorSign'>R$</span>
        <span className="value">{itemPrice}</span>
      </p>
    </div>
  )
}

export default CartItem