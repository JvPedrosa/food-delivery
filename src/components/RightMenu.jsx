import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useStateValue } from '../store/StateProvider'
import SubMenuContainer from './SubMenuContainer'

const RightMenu = () => {
  const [{ cart }, dispatch] = useStateValue()
  const [totalPrice, setTotalPrice] = useState(0)

  return (
    <div className="rightMenu">
      {!cart ? <div>
        <h3>O carrinho está vazio!</h3>
      </div> :
        <div className="cartCheckOutContainer">
          <div className="cartContainer">
            <SubMenuContainer name={"Itens no Carrinho"} />
            <div className="cardItems">
              {
                cart && cart.map(data => (
                  <CartItem
                    key={data.id}
                    itemId={data.id}
                    name={data.name}
                    imgSrc={data.imgSrc}
                    price={data.price}
                  />
                ))
              }
            </div>
          </div>
          <div className="totalSection">
            <h3>Total</h3>
            <p><span>{totalPrice}</span></p>
          </div>
          <div className="checkout">
            <button>Finalizar Pedido</button>
          </div>
        </div>
      }
    </div>
  )
}

export default RightMenu