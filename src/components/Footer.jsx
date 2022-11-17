import React from 'react'
import MenuContainer from './MenuContainer'
import { AccountBalanceWalletRounded, Chat, HomeRounded, Settings } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className="bottomMenu">
      <ul id="menu">
        <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
        <MenuContainer link={'#'} icon={<Chat />} />
        <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
        <MenuContainer link={'#'} icon={<Settings />} />
        <div className="indicator"></div>
      </ul>
    </div>
  )
}

export default Footer