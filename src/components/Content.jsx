import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Pedidos from '../pages/Pedidos'
import RightMenu from './../components/Home/RightMenu'

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
      </Routes>
      <RightMenu />
    </main>
  )
}

export default Content