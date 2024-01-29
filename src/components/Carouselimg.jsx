import React from 'react'
import "./comp.css";
import { Card } from 'react-bootstrap';
export default function CarouselImg() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active w-100" data-bs-interval="10000">
    <Card className="text-dark">
      <img src="../src/assets/images/digtal.jpg" className="d-block carouselImg_style" alt="..."/>
      <Card.ImgOverlay className='text-center pt-5 mt-5'>
        <div className='bg-light w-50 m-auto style_text_Carousel'>
        <Card.Title><h2 className='fw-bold'>"أقوى العروض"</h2></Card.Title>
        <Card.Text>
          <h4>يوجد جميع أنواع الأجهزة الديجيتال والمستخدمات المنزلية</h4>
        </Card.Text>
        <Card.Text><h5 className='text-danger fw-bolder'>خصومات تصل الى %50</h5></Card.Text>
        </div>
      </Card.ImgOverlay>
      </Card>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <Card className="text-dark">
      <img src="../src/assets/images/phons2.jpg" className="d-block carouselImg_style" alt="..."/>
      <Card.ImgOverlay className='text-center pt-5 mt-5'>
        <div className='bg-light w-50 m-auto style_text_Carousel'>
        <Card.Title><h2 className='fw-bold'>"أقوى العروض"</h2></Card.Title>
        <Card.Text>
          <h4>Smart Phones</h4>
        </Card.Text>
        <Card.Text><h5 className='text-danger fw-bolder'>خصومات تصل الى %30</h5></Card.Text>
        </div>
      </Card.ImgOverlay>
      </Card>
    </div>
    <div className="carousel-item">
    <Card className=" text-dark">
      <img src="../src/assets/images/coloseing.jpg" className="d-block w-100 carouselImg_style" alt="..."/>
      <Card.ImgOverlay className='text-center pt-5 mt-5'>
        <div className='bg-light w-50 m-auto style_text_Carousel'>
        <Card.Title><h2 className='fw-bold'>"أقوى العروض"</h2></Card.Title>
        <Card.Text>
          <h4>جميع الأزياء بأحسن جودة </h4>
        </Card.Text>
        <Card.Text><h5 className='text-danger fw-bolder'>خصومات تصل الى %70</h5></Card.Text>
        </div>
      </Card.ImgOverlay>
      </Card>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
