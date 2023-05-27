import React from 'react'
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import './Company.css';


export default function Company() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 style={{color:'black'}}>Top Recruiters</h1>
          <div className="marquee">
            <img src={img1} alt="Achievement 1" />
            <img src={img2} alt="Achievement 2" />
            <img src={img3} alt="Achievement 3" />
            <img src={img4} alt="Achievement 4" />
            <img src={img5} alt="Achievement 5" />
            <img src={img6} alt="Achievement 3" />
            {/* Add more images here */}
          </div>
        </div>
      </div>
    </div>
  )
}
