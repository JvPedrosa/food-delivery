import React from 'react'
import { Restaurants, Orders } from '../store/Data'
import OrderCard from '../components/Orders/OrderCard'
import { Typography } from '@mui/material'

const Pedidos = () => {
  var restaurante = null

  return (
    
    <main>
      <div className="mainContainer">
      <Typography variant='caption' align='center' display="block" sx={{ flexShrink: 0, color: 'text.secondary',  padding:'10px' }}>Meus Pedidos</Typography>
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