import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getDisplayItemsLeft } from '../services/api';
export default function CardListSecond() {
const [itemsLeft,setItemsLeft]= useState([])
useEffect(()=>{
  getAllDisplayItemsLeft();
},[])

  const getAllDisplayItemsLeft = async ()=>{
    try{
      const res = await getDisplayItemsLeft();
      setItemsLeft(res.data)
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
    <div className="container-fluid p-5">
    <div className="row">
{itemsLeft.map((data)=>{

     return(
        <div className="col-3" key={data.id}>
        <Card style={{ width: '16rem' }} className='to_hover_bottom'>
   <Card.Img className='style_hight_show' variant="top" src={data.img} />
   <Card.Body>
     <Card.Title>{data.title}</Card.Title>
     <Card.Text>
     <del className='text-danger'>{data.numDel}</del><b> بدل<br></br>السعر:<span className='text-danger'>{data.newNum}</span></b>
     </Card.Text>
     <div className='enter_to_card'>
     <Button variant="dark">تفاصيل</Button>
     <span class="bi bi-cart-plus-fill mx-2 fs-5 text-dark bg_gray_icon"></span>
     </div>
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
