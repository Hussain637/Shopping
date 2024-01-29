import React from 'react'
import CompCard from './Comp.Card'
export default function DataShow_For_ShowColothes({clothes}) {

  return (
    <div className='container'>
    <div className="row w-75 m-auto">
  {
    clothes.map((item)=>{
      return(
            <div className="col-4 pt-2" key={item.id}>
            <CompCard  name={item.name} price={item.price} img1={item.img1} img2={item.img2} />
            </div>
      )
    })
  }
  </div>
    </div>
  )
}
