import React from 'react'
import CartItem from './CartItem'
import { useStateValue } from './StateProvider'
import SubMenuContainer from './SubMenuContainer'

const RightMenu = () => {
  const [{ cart }, dispatch] = useStateValue()
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
            <p><span>R$ 14,00</span></p>
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