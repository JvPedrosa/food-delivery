import React from 'react'
import CartItem from './CartItem'
import { useStateValue } from '../../store/StateProvider'

const RightMenu = () => {
  const [{ cart, total }] = useStateValue()

  return (
    <div className="rightMenu">
      {!cart ? <div>
        <h3>O carrinho está vazio!</h3>
      </div> :
        <div className="cartCheckOutContainer">
          <div className="cartContainer">
            <div className="subMenuContainer">
              <h3>Itens no Carrinho</h3>
            </div>
            <div className="cardItems">
              {
                cart && cart.map(data => (
                  <CartItem
                    key={data.id}
                    itemId={data.id}
                    rest={data.itemId}
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
            <p><span>R$ {total}</span></p>
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