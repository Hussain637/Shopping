import React from 'react'
import Card from 'react-bootstrap/Card';

export default function DiscountsSection2() {
    
  return (
    <>
   <div id='section1' className=' container-fluid mt-5'>
   <div className="row">
   <div className="col-6 ">
   <div className=' border_img_section2 '>
    <Card className="text-white style_img_section2">
      <Card.Img src="../src/assets/images/hero.jpg" alt="Card image" />
      <Card.ImgOverlay className='pt-5 mt-5'>
        <Card.Title className='fw-bold'>The CITIZEN</Card.Title>
        <Card.Text className='fw-bold fs-3 text-danger'>
        15% خصم
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
   </div>
    </div>
    <div className="col-6 ">
    <div className=' border_img_section2'>
    <Card className="style_img_section2">
      <Card.Img className=' ' src="../src/assets/images/depositphotos_251320616-stock-photo-supermarket-paper-bag-full-of.jpg" alt="Card image" />
      <Card.ImgOverlay className='pt-5 mt-5'>
        <Card.Title className='fw-bold'>جميع الخضروات و المأكولات المنزلية</Card.Title>
        <Card.Text className='fw-bold fs-3 text-danger'>
        25% خصم
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
    </div>
   </div>
   </div>
    </>
  )
}
