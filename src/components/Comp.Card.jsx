import React from 'react'
import { Card } from 'react-bootstrap'
export default function CompCard({name,price,img1,img2}) {
  return (
    <>
         <Card className='position-relative div_Parent' style={{ width: '16rem' }}>
   <Card.Img className='img1 ' variant="top" src={img1} />
   <Card.Img className='img2' variant="top" src={img2} />
   <Card.Body>
     <Card.Title>{name}</Card.Title>
     <Card.Text className='text-danger'>
     Price: {price} 
     </Card.Text>
     <button className='btn btn-dark'>Details</button>
     <span className='bi bi-cart-plus-fill  bg_lightGray_icon  mx-2 fs-4 text-dark'></span>
   </Card.Body>
 </Card>
    </>
  )
}
