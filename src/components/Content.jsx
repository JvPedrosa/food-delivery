import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const Content = () => {
  return (
    <main>
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </main>
  )
}

export default Content