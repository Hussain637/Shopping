import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { getPestGoods } from '../services/api';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Section4() {
  const [goods,setGoods] = useState([]);

  useEffect(()=>{
    getAllBestGoods();
  },[]);

  const getAllBestGoods = async ()=>{
    try{
      const res = await getPestGoods();
      setGoods(res.data);
    }catch(error)
    {console.log(error);}
  } 
  return (
    <>
    <h1 id='section3'><u>Bests Goods</u></h1>
    <Container  className="contant pt-5">
      <Row>
      {goods.map((data)=>{
 return(
    <div key={data.id} className="col-5 m-auto">
        <Card className='parent' style={{ width: '16rem' }}>
      <Card.Img className='imgHover' variant="top" src={data.img1} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className='text-danger'>
        {data.price} :السعر
        </Card.Text>
        <Link className='btn btn-secondary ' to={data.page} >المزيد</Link>
      </Card.Body>
    </Card>
    </div>
 )    
})}
</Row>
</Container>  
    {/* <div className="col-5">
        <Card className='parent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/images/FileImgShow/3(2).jpg" />
      <Card.Img className='position-absolute img_style_hover' variant="top" src="../src/assets/images/FileImgShow/4(2).jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='text-danger'>
       :السعر
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-5 m-auto pt-4">
        <Card className='parent' style={{ width: '18rem' }}>
      <Card.Img className='imgHover' variant="top" src="../src/assets/images/FileImgShow/6(3).jpg" />
      <Card.Img className=' position-absolute img_style_hover' variant="top" src="../src/assets/images/FileImgShow/5(3).jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text className='text-danger'>
          :السعر
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-5 pt-4 ">
        <Card className='parent' style={{ width: '18rem' }}>
      <Card.Img className='imgHover img_phone_style' variant="top" src="../src/assets/images/FileImgShow/8(4).jpg" />
      <Card.Img className=' position-absolute img_style_hover4' variant="top" src="../src/assets/images/FileImgShow/7(4).jpg" />
      <Card.Body>
        <Card.Title>  </Card.Title>
        <Card.Text className='text-danger'>
         :السعر
        </Card.Text>
      </Card.Body>
    </Card>
    </div> */}
    </>
  )
}
