import { AddRounded } from '@mui/icons-material';
import React from 'react'

const ItemCard = ({ imgSrc, name, price, itemId }) => {
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
          <i className="addtoCart">
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  )
}

export default ItemCard