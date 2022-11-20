import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Chat from './../pages/Chat';

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/chat' exact element={<Chat />} />
      </Routes>
    </main>
  )
}

export default Content