import React from 'react'
import { Link } from 'react-router-dom'

export default function Section1() {
  return (
    <div className='container-fluid p-3'>
          <div className='row'>
            <div className='col-4'>
          <div className='w-25 position-relative '>
        <img src="../../public/logo/Flamingo_45.png" className='w-100'/>
          </div>
        <span className='position-absolute name_logo first_word mb-3'>FLAMINGO</span>
        <span className='position-absolute name_logo2 text-light'>-فلامينجو</span>
          </div>
            <div className="col-4">
              <input type='text' name='name' placeholder='search'className='form-control mt-5' />
            </div>
            <div className="col-4 text-end mt-5">
            <>
  {/* Button trigger modal */}
  <span
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    
  >
  <span className="bi bi-person-fill mx-2  bg_gray_icon fs-4"></span>
  </span>
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style={{zIndex:"111111"}}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content" 
       style={{ backgroundImage:"url(/src/assets/images/flamingo-bird-phoenicopterus-ruber-in-dark-background.jpg)"
       ,backgroundRepeat:"no-repeat",backgroundSize:"cover", opacity:".9"}}>
        <div className="modal-header">
          <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">
            Create Account
          </h1>
          <button
            type="button"
            className="btn-close bg-light"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body w-75 m-auto py-5">
          <input type="text" placeholder='Email' className="form-control my-3  text-center" />
          <input type="password" placeholder='Password' className="form-control my-3  text-center"  />
          <Link to={""} className=' btn btn-primary'>submit</Link>
        </div>
      </div>
    </div>
  </div>
</>
              <Link to={"/pageShoppingCar"} className="bi bi-cart-fill bg_gray_icon mx-2 fs-4 text-dark">  </Link>
            </div>
          </div>
        </div>
  )
}
