import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt  } from "@fortawesome/free-solid-svg-icons";
import Hodpic from "./Hod.jpeg";

export default function Hod() {
  return (
    <div className="container my-2" style={{border: '3px solid grey', borderRadius:'10px'}}>
      <h2 className="mr-2 my-3">HOD Ma'am <FontAwesomeIcon icon={faPenAlt } /></h2>
            
      <div className="row">
        <div className="col-md-6">
          <img
            src={Hodpic}
            alt="HOD pic"
            className="img-fluid"
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="d-flex align-items-center mb-3">
          </div>
          <p className="text-dark">
            <b>“Information Technology is used to increase the transparency,
            efficiency and accuracy of activities required to enhance the
            standard of life” 
            </b>
            <br/>
            <br/>
            Information Technology covers all aspects of
            business and social life. Information Technology solves many of the
            major challenges faced by society and is positively impacting the
            lives of millions of people worldwide. This branch will mould you to
            work on extending the cutting edge technology and business
            innovations. IT professionals find innovative solutions, build
            scalable products, manage data, improve efficiencies and facilitate
            communication. With a computational perspective, they can apply
            their ideas and techniques to a number disciplines including
            business, engineering, natural and social sciences and the
            humanities. Information Technology enjoys the same stature as
            Computer Engineering for recruitment as well as higher studies,
            worldwide!
          </p>
        </div>
      </div>
    </div>
  );
}
