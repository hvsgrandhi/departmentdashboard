import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Fragment } from 'react';
import reportWebVitals from "./reportWebVitals";
import MyComponent from "./components/Loader";
import Navbar from "./components/navbar";
import Clubs from "./components/Cards";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeachingStaff from "./components/TeachingStaff";
import FeedbackForm from "./components/Feedback";
import Events from "./components/Events";
import Table from "./components/Table";
import Hod from "./homeComp/Hod";
import Achieve from "./homeComp/Achieve";
// import PlacementChart from './components/placement/Placement';
import Footer from "./homeComp/Footer";
import App from "./placements/App";
import { uploadDataToFirebase } from "./sendData/DataUpload";
import Company from "./placements/Company";
import About from "./components/About";


const placementData = [
  { year: 2021, student: "John", company: "ABC Corp", package: "10 LPA" },
  { year: 2021, student: "Alice", company: "XYZ Corp", package: "12 LPA" },
  { year: 2023, student: "Salil Chincholkar", company: "Riisa Consulting", package: "19.5 LPA" },
  { year: 2019, student: "Niharika Sadul", company: "Riisa Consulting", package: "19.5 LPA" },
  { year: 2019, student: "Tanmayee Kulkarni", company: "Vmware", package: "6.58 LPA" },
  { year: 2019, student: "Anurag Joshi", company: "Schlumberger", package: "12 LPA" },
  { year: 2018, student: "Rucha Kadam", company: "Altimetrik", package: "5 LPA" },
  { year: 2018, student: "Omkar", company: "Altimetrik", package: "5 LPA" },


  // { year: 2021, student: "Alice", company: "XYZ Corp", package: "12 LPA" },
  // ...

  // Modify the data as per your requirements
];

// Call the function to upload the data
uploadDataToFirebase(placementData);
//continue
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path=""
        element={[
          <>
          <MyComponent key="loader" />,
          <Navbar key="navbar" />,
          <Clubs key="clubs" />,
          <Hod key="hod" />,
          <Achieve key="achieve" />,
          <Footer key="footer" />,
          </>
        ]}
      />
      <Route
        path="/teachingstaff"
        element={[<><Navbar key="navbar" />, <TeachingStaff key="teachers" /></>]}
      />
      <Route
        path="/feedback"
        element={[<><Navbar key="navbar" />, <FeedbackForm key="feedback" /></>]}
      />
      <Route
        path="/events"
        element={[
          <>
          <Navbar key="navbar" />,
          <Events key="events" />,
          <Table key="tablesofevent" />,
          </>
        ]}
      />
      <Route
        path="/placements"
        element={[<><Navbar key="navbar" />, <App key="app" /><Company key="company"/></>]}
      />
      <Route
        path="/about"
        element={[<><Navbar key="navbar" />, <About key="about" /></>]}
      />
      
      
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
