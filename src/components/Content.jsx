import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Wallet from '../pages/Wallet';
import Chat from './../pages/Chat';
import ChatPedido from './../pages/ChatPedido';

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chat' exact element={<Chat />} />
        <Route path='/chat/:id' exact element={<ChatPedido />} />
        <Route path='/wallet' exact element={<Wallet />} />
      </Routes>
    </main>
  )
}

export default Content