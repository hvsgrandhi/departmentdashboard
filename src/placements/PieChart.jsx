// // PieChartComponent.js

// import React from 'react';
// import { PieChart, Pie, Cell } from 'recharts';

// const PieChartComponent = ({ year, placements }) => {
//   // Filter placements for the selected year
//   const filteredPlacements = placements.filter((placement) => placement.year === year);

//   // Render the pie chart with placement data
//   return (
//     <div>
//       <PieChart width={400} height={300}>
//         <Pie
//           data={filteredPlacements}
//           dataKey="package"
//           nameKey="student"
//           cx="50%"
//           cy="50%"
//           outerRadius={80}
//           fill="#8884d8"
//         >
//           {/* Customize the pie chart appearance as per your requirement */}
//           {filteredPlacements.map((_, index) => (
//             <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default PieChartComponent;
import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const PieChartComponent = ({ year, placements }) => {
  const filteredPlacements = placements.filter((placement) => placement.year === year);

  if (filteredPlacements.length == 0) {
    return <p style={{color:'black'}}>No data available for the selected year.</p>;
}
console.log("here error")

  const data = filteredPlacements.map((placement) => ({
    name: placement.student,
    value: placement.package,
  }));

  const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div>
      <h3>Pie Chart for Year {year}</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={randomColor()} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
