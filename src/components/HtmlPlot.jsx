import React, { useState, useEffect } from 'react';

const HtmlPlot = ({source}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Ensures iframe only loads once
    setLoaded(true);
  }, []);

  return (
    <div style={{ width: '100%', height: '600px' }}>
      {loaded && (
        <iframe
          src={source}
          title="MATLAB Plot"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          sandbox="allow-scripts allow-same-origin"
        />
      )}
    </div>
  );
};

export default HtmlPlot;
