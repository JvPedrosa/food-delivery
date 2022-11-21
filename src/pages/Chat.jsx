import React from 'react'
import CardRestaurante from '../components/Chat/CardRestaurant'

const Chat = () => {
  localStorage.setItem("name", "Maria Coxinha");
  localStorage.setItem("imgSrc", 'https://firebasestorage.googleapis.com/v0/b/ufood-d70f4.appspot.com/o/Images%2Frestaurants%2Fmariacoxinha.jpg?alt=media&token=a09dba86-904d-49d1-b87b-583f5cae8013')
  return (
    <div className='chat'>
      <CardRestaurante
        name={'Maria Coxinha'}
        imgSrc={'https://firebasestorage.googleapis.com/v0/b/ufood-d70f4.appspot.com/o/Images%2Frestaurants%2Fmariacoxinha.jpg?alt=media&token=a09dba86-904d-49d1-b87b-583f5cae8013'}
        numPedido={Math.floor(Math.random() * 100000)}
        dtPedido={'01/12/2022'}
      />
      <CardRestaurante
        name={'Açai da Barra'}
        imgSrc={'https://firebasestorage.googleapis.com/v0/b/ufood-d70f4.appspot.com/o/Images%2Frestaurants%2Facai-da-barra.jpg?alt=media&token=eee3c7fe-e21c-453a-ab1f-4c2a4c4548db'}
        numPedido={Math.floor(Math.random() * 100000)}
        dtPedido={'04/12/2022'}
      />
    </div>
  )
}

export default Chat