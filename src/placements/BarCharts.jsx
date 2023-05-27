// import { BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// const PlacementsComponent = () => {
//   // ...

//   // Calculate the number of students placed each year
//   const yearWiseData = placements.reduce((acc, placement) => {
//     const year = placement.year;
//     acc[year] = acc[year] ? acc[year] + 1 : 1;
//     return acc;
//   }, {});

//   // Handle bar click
//   const handleBarClick = (year) => {
//     // Handle click and load the pie chart component with the corresponding data
//   };

//   // Render the placement data in your React component
//   return (
//     <div>
//       <BarChart width={400} height={300} data={Object.entries(yearWiseData)}>
//         <Bar
//           dataKey="1"
//           fill="#8884d8"
//           onClick={({ year }) => handleBarClick(year)}
//         />
//       </BarChart>
//     </div>
//   );
// };
// BarChartComponent.js
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PieChartComponent from './PieChart';

const BarChartComponent = ({ placements }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  const yearWiseData = placements.reduce((acc, placement) => {
    const year = placement.year;
    acc[year] = acc[year] ? acc[year] + 1 : 1;
    return acc;
  }, {});

  const handleBarClick = (year) => {
    setSelectedYear(year);
  };

  const closePieChart = () => {
    setSelectedYear(null);
  };

  const data = Object.keys(yearWiseData).map((year) => ({
    year,
    students: yearWiseData[year],
  }));

  return (
    <div>
      {selectedYear ? (
        <PieChartComponent year={selectedYear} placements={placements} onClose={closePieChart} />
      ) : (
        <BarChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="students"
            fill="#8884d8"
            onClick={({ year }) => handleBarClick(year)}
            cursor="pointer"
          />
        </BarChart>
      )}
    </div>
  );
};

export default BarChartComponent;
