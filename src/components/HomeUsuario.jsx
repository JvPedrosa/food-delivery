import React, { useEffect, useState } from 'react'
import BannerName from './BannerName'
import { Items, Restaurants } from '../store/Data'
import MenuCard from './MenuCard'
import ItemCard from './ItemCard';
import RightMenu from './RightMenu';
import { useStateValue } from "../store/StateProvider";

const HomeUsuario = () => {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "vascao")
  );
  const [{ }, dispatch] = useStateValue()
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
            <div className="subMenuContainer">
              <h3>Restaurantes</h3>
            </div>
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
      <RightMenu />
    </main>
  )
}

export default HomeUsuario