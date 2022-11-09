import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React from 'react'
import Logo from './images/logo.png'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" className='logo' />

      <div className="inputBox">
        <SearchRounded className='searchIcon' />
        <input type="text" placeholder='Pesquisar...' />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className='cart' />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ufood-d70f4.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=01ff35f1-33bd-47cb-a398-1616cc37a9c2"
            alt="img-user"
            className='profilePic'
          />
        </div>

        <h2 className="userName">João Victor</h2>
      </div>

      <div className="toogleMenu">
        <BarChart className='toogleIcon' />
      </div>
    </header>
  )
}

export default Header