import React from 'react'
import { AccountBalanceWalletRounded, Chat, HomeRounded, Settings } from '@mui/icons-material';
import MenuContainer from './../Home/MenuContainer';

const Footer = () => {
  return (
    <div className="bottomMenu">
      <ul id="menu">
        <MenuContainer link={'/'} icon={<HomeRounded />} isHome />
        <MenuContainer link={'/chat'} icon={<Chat />} />
        <MenuContainer link={'/wallet'} icon={<AccountBalanceWalletRounded />} />
        <MenuContainer link={'/settings'} icon={<Settings />} />
        <div className="indicator"></div>
      </ul>
    </div>
  )
}

export default Footer