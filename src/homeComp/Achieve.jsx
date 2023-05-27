import React from 'react';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import './Achieve.css'

export default function Achieve() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Achievements</h2>
          <div className="marquee">
            <img src={pic1} alt="Achievement 1" />
            <img src={pic2} alt="Achievement 2" />
            <img src={pic3} alt="Achievement 3" />
            <img src={pic4} alt="Achievement 4" />
            <img src={pic5} alt="Achievement 5" />
            <img src={pic3} alt="Achievement 3" />
            {/* Add more images here */}
          </div>
        </div>
      </div>
    </div>
  );
}


