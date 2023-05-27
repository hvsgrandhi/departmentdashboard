import React, { useState } from "react";
import { Link } from "react-router-dom";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS
// const Swal = require('sweetalert2');
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const success = () => {
    if (document.getElementById("textsend").value === "") {
      document.getElementById("button").disabled = true;
    } else {
      document.getElementById("button").disabled = false;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    const feedbackData = {
      message: feedback,
      timestamp: { formattedDate, formattedTime },
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      location: navigator.geolocation,
      cookiestatus: navigator.cookieEnabled,
      permission: navigator.permissions,
      product: navigator.vendor,
    };

    fetch(
      "https://departmentdashboard-dec42-default-rtdb.asia-southeast1.firebasedatabase.app/feedback.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        //swal popup
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your feedback is been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
        // Reset the feedback form
        setFeedback("");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "danger",
          title: "Something went wrong!:",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="container">
      <h2>
        <b>Anonymous Feedback</b>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control input"
            id="textsend"
            rows="6"
            cols="40"
            onKeyUp={success}
            value={feedback}
            name="demo"
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback..."
          ></textarea>
        </div>
        {/* <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Enter your feedback..."
        ></textarea> */}
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="my-2 mx-2"
          />
            <Link to='https://docs.google.com/document/d/15jvbeWsc1kHu7JgsUFs4CJmHhceKTa2RdYHDeuizRH8/edit?usp=sharing' target="_blank" rel="noopener noreferrer">Terms and Conditions</Link>
        </label>
        <br/>
        <button className="btn btn-primary my-3" disabled={!isChecked} type="submit" id="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
