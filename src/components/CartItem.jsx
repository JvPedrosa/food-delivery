import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useState } from 'react'

const CartItem = ({ name, imgSrc, price, itemId }) => {
  const [qty, setQty] = useState(1);
  var preco = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <div className='cardItem'>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x{qty}</span>
          <div className="quantity">
            <RemoveRounded className='itemRemove' />
            <AddRounded className='itemAdd' />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="value">{preco}</span>
      </p>
    </div>
  )
}

export default CartItem