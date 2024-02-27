import React from 'react'
import {Quote, Carousel, CTA, CarouselItem} from "../../components"
import {memes} from "../../assets/memes";
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
      <Quote/>
      <Carousel>
        {
          memes.map(({id,img}) =>(
            <CarouselItem><img className='carousel-img' key={id} src={img} alt="funnyMeme" /></CarouselItem>
          ))
        }
      </Carousel>
      <CTA/>       
    </div>
  )
}

export default Home