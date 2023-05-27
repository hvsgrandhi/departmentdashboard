import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    //   setData({ title: 'Example Data' });
    }, 800);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <BeatLoader color="#123abc" loading={isLoading} />
        </div>
      ) : (
        <div>
          {/* <h1>{data.title}</h1> */}
          {/* display fetched data here */}
        </div>
      )}
    </div>
  );
}

export default MyComponent;
