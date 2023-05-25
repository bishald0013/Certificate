import React from 'react'
import Cards from '../Cards/Cards'
import Image1 from '../../Images/image1.jpg'
// import Image2 from '../../Images/image2.jpg'
import Image3 from '../../Images/image3.jpg'
import Image4 from '../../Images/image4.jpg'

function Theme() {
  return (
    <div className='container'>
        <h1 className='fs-4'> Select Theme </h1>
        <div className="row mt-5">
          <div className="col-lg-3">
            <Cards card={Image1}/>
          </div>
          <div className="col-lg-3">
            <Cards card={Image4}/>
          </div>
          <div className="col-lg-3">
            <Cards card={Image3}/>
          </div>
          <div className="col-lg-3">
            <Cards card={Image4}/>
          </div>
          <div className="col-lg-3 mt-4">
            <Cards card={Image4}/>
          </div>
          <div className="col-lg-3 mt-4">
            <Cards card={Image3}/>
          </div>
          <div className="col-lg-3 mt-4">
            <Cards card={Image1}/>
          </div>
          <div className="col-lg-3 mt-4">
            <Cards card={Image3}/>
          </div>
        </div>
    </div>
  )
}

export default Theme