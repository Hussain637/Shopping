import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getDisplayItemsRight } from '../services/api';
import { useEffect, useState } from 'react';
function CardList() {

const [itemsRight,setItemRight] = useState([]);

const getAllDisplayItmesRight = async ()=>{
  try{
    const res = await getDisplayItemsRight();
    setItemRight(res.data);
  }catch(error){
    console.log(error);
  }
}
useEffect(()=>{
  getAllDisplayItmesRight();
},[]);
  return (
    <>
    <div className="container-fluid  p-5">
    <div className="row">
{itemsRight.map((data)=>{

     return(
        <div className="col-3" key={data.id}>
        <Card style={{ width: '16rem' }} className='to_hover_bottom position-relative'>
   <Card.Img className='style_hight_show ' variant="top" src={data.img} />
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
  );
}

export default CardList;

// CardListSecond

