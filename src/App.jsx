import React, { useState, useEffect, useMemo } from 'react';
import Planet from './components/Planets';
import Panel from './components/Panel';
import './App.css'

function App() {

  const [planetsLog, setPlanetsLog] = useState([]);

  return (
    <div>
      <Panel />
      {planetsLog.map((planet, index) => (
        <Planet key={index} nombre={planet} />
      ))}
    </div>
  );
}

export default App
