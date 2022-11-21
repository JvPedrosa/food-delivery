import React from 'react'
import { ArrowBackIos } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { Input, InputAdornment } from '@mui/material';

const ChatPedido = () => {
  const name = localStorage.getItem('name')
  const imgSrc = localStorage.getItem('imgSrc')
  return (
    <div className='chat'>
      <div className='chatpedido'>
        <div className='dados'>
          <Link to={'/chat'}>
            <ArrowBackIos fontSize='large' />
          </Link>
          <div className='imgBox'>
            <img src={imgSrc} alt='logo' />
          </div>
          <h3>{name}</h3>
        </div>
      </div>
      <div className='conversa'>
        <div>
          <div className='right'>
            <div className="container">
              <p>Olá, você podem mandar ketchup por favor?</p>
              <span className="time-right">11:00</span>
            </div>
          </div>

          <div className='left'>
            <div className="container darker">
              <p>Podemos sim!!</p>
              <span className="time-left">11:01</span>
            </div>
          </div>

          <div className='right'>
            <div className="container">
              <p>Ok, muito obrigado.</p>
              <span className="time-right">11:02</span>
            </div>
          </div>

          <div className='left'>
            <div className="container darker">
              <p>De nada!</p>
              <span className="time-left">11:05</span>
            </div>
          </div>
        </div>
        <div>
          <Input placeholder='Escreva aqui sua mensagem...'
            endAdornment={
              <InputAdornment position="end">
                <SendIcon />
              </InputAdornment>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default ChatPedido