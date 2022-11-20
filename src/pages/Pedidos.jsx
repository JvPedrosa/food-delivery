import React from 'react'
import { Restaurants, Orders } from '../store/Data'
import OrderCard from '../components/Orders/OrderCard'

const Pedidos = () => {
  var restaurante = null

  return (
    
    <main>
      <div className="mainContainer">
        <p>Meus Pedidos</p>
        <div className="cardItems">
          {Orders && Orders.map((data, index) => (
            restaurante = Restaurants.filter((element) => element.itemId === data.restauranteId)[0],
            <div key={index}>
              <OrderCard imgRes={restaurante.imgSrc} nameRes={restaurante.name} idPedido={index} itens={data.itens} />
            </div>
           ))}
        </div>
      </div>
    </main>
  )
}

export default Pedidos