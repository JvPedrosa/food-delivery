import React from 'react'

const BannerName = ({ name }) => {
  return (
    <div className='bannerContent'>
      <h3>Olá {name}</h3>
      <p>Aproveite nossa entrega grátis para compras acima de <b>R$20</b></p>
    </div>
  )
}

export default BannerName