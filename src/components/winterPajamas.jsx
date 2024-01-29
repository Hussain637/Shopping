import React from 'react'
import { Card } from 'react-bootstrap'

export default function WinterPajamas({pajamas}) {
  return (
    <>
    <div id={pajamas.targetId} className=' container-fluid pt-5 mt-5'>
    <h2 className='w-75 m-auto position-relative text-bg-light fw-bold header_animation'>Winter pajamas</h2>
    <div className="row w-75 m-auto">
    {pajamas.map((goods)=>{
        return(
        <div className="col-3 py-2 mt-4"  key={goods.id}>

    <Card  className='img_hover overflow-hidden' style={{ width: '12rem', height:"28rem" }}>
         <Card.Img src={goods.img} alt='card image' />
    <Card.Body>
     <Card.Title>{goods.name}</Card.Title>
     <Card.Text className='text-danger'>
       Price: {goods.price} 
     </Card.Text>
     <button className='btn btn-dark'>Details</button>
     <span className='className="bi bi-cart-plus-fill  bg_lightGray_icon  mx-2 fs-4 text-dark'></span>
   </Card.Body>
 </Card>
            </div>
        )
    })}
    </div>
    </div>
    </>
  )
}
