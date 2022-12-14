import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Pedidos from '../pages/Pedidos'
import RightMenu from './../components/Home/RightMenu'
import Wallet from '../pages/Wallet';
import Chat from './../pages/Chat';
import ChatPedido from './../pages/ChatPedido';
import Settings from './../pages/Settings';

const Content = () => {
  
  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');
      function setMenuActive() {
        menuLi.forEach(n => n.classList.remove('active'));
        this.classList.add('active')
      }
      menuLi.forEach(n => n.addEventListener('click', setMenuActive))
    },)

  return (
    <main>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/pedidos' exact element={<Pedidos />} />
        <Route path='/chat' exact element={<Chat />} />
        <Route path='/chat/:id' exact element={<ChatPedido />} />
        <Route path='/wallet' exact element={<Wallet />} />
        <Route path='/settings' exact element={<Settings />} />
      </Routes>
      <RightMenu />
    </main>
  )
}

export default Content