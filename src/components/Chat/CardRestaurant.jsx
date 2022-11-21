import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const CardRestaurante = ({ name, imgSrc, numPedido, dtPedido }) => {

  return (
    <>
      <div className='restaurante-chat'>
        <div className='dados'>
          <div className='imgBox'>
            <img src={imgSrc} alt='logo' />
          </div>
          <div>
            <h3>{name}</h3>
            <p>Pedido {numPedido}</p>
            <p>{dtPedido}</p>
          </div>
        </div>
        <div className='arrow'>
          <Link to={'/chat/' + numPedido} state={{ name: name }}>
            <ArrowForwardIosIcon fontSize='large' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default CardRestaurante