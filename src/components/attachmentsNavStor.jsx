import React from 'react'
import { Link } from 'react-router-dom'

export default function AttachmentsNavStor() {
  return (
    <div className="container-fluid ">
        <div className="desktop_header_all fw-light h-6">
            <div className="desktop_header_left">
                <span className="fa-solid fa-phone"></span>
                <span className="px-1 fw-bold">Need help? Call Us : <a href="#" className="text-light number_bar"> +8 88 55 4168</a></span>
                <span><ul className="d-inline-block Languages_style_none">
                    <span className="len">Languages
                        <ul className="Languages_style_none">
                        <li className="Language"><a href="#" className="Language_link english_color">English</a></li>
                        <li className="Language"><a href="#" className="Language_link">Germany</a></li>
                        <li className="Language"><a href="#" className="Language_link">France</a></li>
                        </ul>
                    </span>
                </ul><span className="fa-solid fa-angle-down px-1"></span></span>
                {/* Currencies */}
                <span><ul className="d-inline-block Languages_style_none currencies">
                    <span className="len len_currencies">Currencies
                        <ul className="Languages_style_none">
                        <li className="Language"><a href="#" className="Language_link english_color">USD</a></li>
                        <li className="Language"><a href="#" className="Language_link">Euro</a></li>
                        <li className="Language"><a href="#" className="Language_link">GBP</a></li>
                        </ul>
                    </span>
                </ul><span className="fa-solid fa-angle-down px-1"></span></span>
                <Link to={"/pageShoppingCar"} className="bi bi-cart-fill  bg_gray_icon mx-2 fs-4 text-dark"></Link>
        </div>   
        </div>
      
    </div>
  )
}   
