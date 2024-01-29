
import DataShow_For_ShowColothes from "../../components/dataShow_For_ShowColothes";
import "./stor.css";
import { getShowClosthes, getwinterChildrensColothes, getwinterPajamas } from '../../services/api';
import React, { useEffect, useState } from 'react'
import WinterPajamas from "../../components/winterPajamas";
import WinterChildrensColothes from "../../components/winterChildrensColothes";

export default function PageChildrensFashion() {
  const [clothes , setClothes] = useState([]);
  const [pajamas , setPajamas] = useState([]);
  const [winterChildrens , setWinterChildrens] = useState([]);
  useEffect(()=>{
    getAllShow();
    getAllWinterPajamas();
    getAllWinterChildrensColothes();
  },[])
    const getAllShow = async ()=>{
      try{
        const res = await getShowClosthes();
        setClothes(res.data)
      }catch(error){
        console.log(error);
      }
    };
const getAllWinterPajamas = async ()=>{
  try{
      const res = await getwinterPajamas();
      setPajamas(res.data)
  }catch(error){
    console.log(error);
  }
};
const getAllWinterChildrensColothes = async ()=>{
  try{
      const res = await getwinterChildrensColothes();
      setWinterChildrens(res.data)
  }catch(error){
    console.log(error);
  }
}
  return (
    <div style={{backgroundImage:"url(../src/assets/images/logo_pabg_FLAMINGO_BLUEWHITE.jpg)"}}>
      <div className='position-relative pb-5'>
      <img className='style_photo' src='../src/assets/images/Children_Page/rockets-of-awesome-1.jpg' alt='' />
      <h2 className=' w-50 position-absolute style_word_header text-center'>The best closthes for your kids have been hunted</h2>
      </div>
      {/* cardes for colothes */}
   <DataShow_For_ShowColothes clothes={clothes} />
   {/* Winter pajamas */}
   <WinterPajamas pajamas={pajamas} />
   {/* winterChildrensColothes */}
   <WinterChildrensColothes winterChildrens={winterChildrens}/>
    </div>
  )
}
