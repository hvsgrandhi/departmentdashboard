import React from "react";
import acmlogo from './acmlgo.png';
import itsalogo from './itsalogo.jpeg';
import ittechclublogo from './ittechclublogo.jpeg';
import './cards.css';
// import '../../node_modules/'

export default function Clubs() {
  return (
    <div className=" d-flex flex-row ">
      <section className="headline">
      <a href="https://www.mmcoe.edu.in/index.php/information-technology/information-technology/26272e/students-association" target="_blank" rel="noopener noreferrer">
        <div className="card mx-auto my-6" style={{width:'18rem'}}>
          <img className="card-img-top" src={itsalogo} alt="Card  cap" />
          <div className="card-body">
            <p className="card-text text-dark">
            <b><i>Information Technology Student's Association</i></b>
            </p>
          </div>
        </div>
        </a>
      </section>
      <section className="headline">
        <a href="https://mmcoe.acm.org/" target="_blank" rel="noopener noreferrer">
        <div className="card mx-auto my-6" style={{width:'18rem'}}>
          <img className="card-img-top" src={acmlogo} alt="Card  cap" />
          <div className="card-body">
            <p className="card-text text-dark">
            <b><i>Association Of Computing Machinery</i></b>
            </p>
          </div>
        </div>  
        </a>
      </section>
      <section className="headline">
      <a href="https://mmcoe.acm.org/" target="_blank" rel="noopener noreferrer">
        <div className="card mx-auto my-6" style={{width:'17.5rem', height:'21.35rem'}}>
          <img className="card-img-top" src={ittechclublogo} alt="Card cap" />
          <div className="card-body">
            <p className="card-text text-dark">
            <b><i>Information Technology Tech Club</i></b>
            </p>
          </div>
        </div>
        </a>
      </section>
    </div>
  );
}
