import React from 'react'
import { useState } from 'react';
import { BsChevronCompactLeft } from 'react-icons/Bs';
import { BsChevronCompactRight } from 'react-icons/Bs';

import "./carousel.css"

export const CarouselItem = ({children, width}) =>{
  return (
    <div className='carousel-item' style={{width: width}}>
      {children}
    </div>
  )
}

const Carousel = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) =>{
    if(newIndex < 0){
      newIndex = React.Children.count(children) - 1
    } else if(newIndex >= React.Children.count(children)){
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  return (
    <div className='carousel'>
      <div className='carousel-inner' style={{transform: `translateX(-${activeIndex*100}%)`}}>
        {React.Children.map(children, (child, index) =>{
          return React.cloneElement(child, {width: "100%"})
        })
        }
      </div>
      <div className='carousel-indicator-wrapper'>
        <div className='carousel-indicator left' onClick={() =>{
          updateIndex(activeIndex - 1);
        }}>
          <BsChevronCompactLeft color="#fff" fontSize={50}/>
        </div>
        <div className='carousel-indicator right' onClick={() =>{
          updateIndex(activeIndex + 1);
        }}>
          <BsChevronCompactRight color="#fff" fontSize={50}/>
        </div>
      </div>
    </div>
  )
}

export default Carousel