import { AddCardRounded, AddRounded, DeleteForeverRounded } from '@mui/icons-material'
import React from 'react'
import logoMaster from '../components/images/mastercard.svg'

const Wallet = () => {
  return (
    <div className='wallet'>
      <div className='saldo'>
        <div>
          <p>Saldo disponível</p>
          <p>R$7,50</p>
        </div>
        <div>
          <AddRounded />
        </div>
      </div>
      <div className='cartao'>
        <div>
          <p>Mastercard <img src={logoMaster} alt='logo-master' /></p>
          <p>**** 9015</p>
        </div>
        <div>
          <DeleteForeverRounded />
        </div>
      </div>
      <div className='addCartao'>
        <div>
          <p>Adicionar novo cartão</p>
        </div>
        <div>
          <AddCardRounded />
        </div>
      </div>
    </div>
  )
}

export default Wallet