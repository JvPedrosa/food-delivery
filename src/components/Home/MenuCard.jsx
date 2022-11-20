import React from 'react'
import { ChevronRightRounded, StarRounded } from '@mui/icons-material';
import { useState } from 'react';

const MenuCard = ({ imgSrc, name, isActive, ratings }) => {
  const [currentValue] = useState(Math.floor(ratings))

  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className='name'>
        <h3>{name}</h3>
        <div className='ratings'>
          {Array.apply(null, { length: 5 }).map((e, i) => (
            <i key={i} className={`rating ${currentValue > i ? "yellow" : "grey"}`}>
              <StarRounded />
            </i>
          ))}
        </div>
      </div>
      <i className="loadMenu">
        <ChevronRightRounded />
      </i>
    </div>
  )
}

export default MenuCard