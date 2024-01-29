import React from 'react'

export default function BtnUp() {
const btnUp = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
  return (
   <>
    {/* {
        window.onscroll =()=>{
            if(document.body.scrollTop>168 || document.documentElement.scrollTop>168?){

            }
           
            
        :<></>
    }
    } */}
     <span onClick={btnUp} className="bi bi-arrow-up btn position-fixed z-2 style_btn_up btn-outline-secondary"></span>
    </>
    )
}
