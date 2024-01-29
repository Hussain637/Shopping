import React from 'react'
import Carousel from 'react-bootstrap/Carousel'; 
import CardList from './card.List';
import CardListSecond from './cardListSecond';
export default function Section3() {
  return (
  
   <>
      <Carousel id='section2' className=' bg_max_gray_red my-5' >
          <Carousel.Item >
            <CardList />
          </Carousel.Item>
           <Carousel.Item >
            <CardListSecond/>
          </Carousel.Item>
        </Carousel>  
         </>
  )
}
