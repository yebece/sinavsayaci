import React from 'react';
import ReactDOM from 'react-dom';
import Snowfall from 'react-snowfall';

const SnowfallComponent = () => {
  return (
    <div style={{ height: 400, width: 400, background: '#282c34', position: 'relative' }}>
      <Snowfall />
    </div>
  );
};

export default SnowfallComponent;
