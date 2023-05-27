import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import './Table.css';
export default function Table() {
  const [data, setData] = useState([
    {
      id: 1,
      event: "HP on ground activity",
      date: "2019-07-23",
      link: "https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events",
    },
    {
      id: 2,
      event: "International Yoga Day",
      date: "2018-06-22",
      link: "https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events",
    },
    {
      id: 3,
      event: "Technical Quiz",
      date: "2022-01-01",
      link: "https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events",
    },
    {
      id: 4,
      event: "Technical Quiz",
      date: "2023-09-01",
      link: "https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events",
    },
    {
      id: 5,
      event: "Technical Quiz2.0",
      date: "2023-05-27",
      link: "https://www.mmcoe.edu.in/index.php/students-corner/extra-curricular-events",
    },
    // Add more data as needed
  ]);

  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const renderSortIcon = () => {
    if (sortOrder === "asc") {
      return <FontAwesomeIcon icon={faSortUp} />;
    } else {
      return <FontAwesomeIcon icon={faSortDown} />;
    }
  };

  // Get the current date
  const currentDate = new Date();

  // Filter upcoming events and past events based on the current date
  const upcomingEvents = data.filter(
    (item) => new Date(item.date) > currentDate
  );
  const pastEvents = data.filter((item) => new Date(item.date) <= currentDate);

  return (
    <div>
      <h2><b>Upcoming Events</b></h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col" >Event</th>
            <th scope="col" >
              Date{" "}
              <button className="btn btn-link" onClick={handleSort}>
                {renderSortIcon()}
              </button>
            </th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {upcomingEvents.map((item) => (
            <tr key={item.id}>
              <td>
                {item.id}
                &nbsp;
                {item && (
                  <span className="blink" style={{ color: "red" }}>
                    New*
                  </span>
                )}
              </td>
              <td>{item.event}</td>
              <td>{item.date}</td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2><b>Past Events</b></h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col" >Event</th>
            <th scope="col">
              Date{" "}
              <button className="btn btn-link" onClick={handleSort}>
                {renderSortIcon()}
              </button>
            </th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:'#cbcbcb'}}>
          {pastEvents.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.event}</td>
              <td>{item.date}</td>
              <td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
