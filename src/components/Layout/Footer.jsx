import React from 'react'
import { AccountBalanceWalletRounded, Chat, HomeRounded, Settings, Receipt } from '@mui/icons-material'
import MenuContainer from './../Home/MenuContainer'

const Footer = () => {

  return (
    <div className="bottomMenu">
      <ul id="menu">
        <MenuContainer link={'/'} icon={<HomeRounded />} isHome />
        <MenuContainer link={'/pedidos'} icon={<Receipt />} />
        <MenuContainer link={'#'} icon={<Chat />} />
        <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
        <MenuContainer link={'#'} icon={<Settings />} />
        <div className="indicator"></div>
      </ul>
    </div>
  )
}

export default Footer