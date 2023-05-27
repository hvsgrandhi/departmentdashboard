import React, { useEffect, useState } from 'react';
import database from '../firebase';
import BarChartComponent from './BarCharts';
// import PieChartComponent from './PieChart';

const App = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const fetchPlacements = () => {
        const placementsRef = database.ref('placements');
        
        try {
          placementsRef.on('value', (snapshot) => {
              const data = snapshot.val();
              if (data) {
                  const placementArray = Object.values(data);
                  setPlacements(placementArray);
                }
            });
        } catch (error) {
            console.error('Error fetching placements:', error);
        }
    };
    
    
    fetchPlacements();
    
    // Cleanup the event listener when the component unmounts
    return () => database.ref('placements').off();
}, []);

return (
    <div>
        
      <BarChartComponent placements={placements} />
      {/* <PieChartComponent placements={placements} /> */}
    </div>
  );
};

export default App;
