import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './App.css';
import BannerName from './components/BannerName';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import MenuContainer from './components/MenuContainer';
import SubMenuContainer from './components/SubMenuContainer';
import { Restaurants, Items } from './components/Data'
import ItemCard from './components/ItemCard';

function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "vascao")
  );

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuActive() {
      menuLi.forEach(n => n.classList.remove('active'));
      this.classList.add('active')
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))

    const menuCards = document.querySelector(".rowContainer").querySelectorAll('.rowMenuCard');
    function setMenuCardActive() {
      menuCards.forEach(n => n.classList.remove('active'))
      this.classList.add('active')
    }
    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
  }, [isMainData])

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };

  return (
    <div className="App">
      <Header />

      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"João"} />
            <img
              src='https://firebasestorage.googleapis.com/v0/b/ufood-d70f4.appspot.com/o/Images%2Fdelivery.png?alt=media&token=ade1191e-f0dc-433d-8860-532a5cdc5a35'
              alt='delivery'
              className='deliveryPic'
            />
          </div>
          <div className='restaurantContainer'>
            <div className="menuCard">
              <SubMenuContainer name={"Restaurantes"} />
            </div>
            <div className="rowContainer">
              {Restaurants && Restaurants.map((data, index) => (
                <div key={index} onClick={() => setData(data.itemId)}>
                  <MenuCard imgSrc={data.imgSrc} name={data.name} isActive={data.id === 1 ? true : false} ratings={data.ratings} />
                </div>
              ))}
            </div>
            <div className="itemContainer">
              {isMainData && isMainData.map((data) => (
                <ItemCard key={data.id} itemId={data.id} imgSrc={data.imgSrc} name={data.name} price={data.price} />
              ))}
            </div>
          </div>
        </div>
        <div className="rightMenu"></div>
      </main>

      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon={<HomeRounded />} isHome />
          <MenuContainer link={'#'} icon={<Chat />} />
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />
          <MenuContainer link={'#'} icon={<Favorite />} />
          <MenuContainer link={'#'} icon={<SummarizeRounded />} />
          <MenuContainer link={'#'} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
