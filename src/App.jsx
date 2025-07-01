import React, { useState } from 'react';
import Planet from './components/Planets';
import Panel from './components/Panel';
import './App.css'

function App() {

  const [switchPanel,setSwitchPanel]=useState(true);
  const [planetsLog, setPlanetsLog] = useState([]);

  return (
    <div>
      <header className="d-flex justify-content-center">
                <h1 className="fs-4 shadow text-center text-break my-2 py-2 py-sm-5 w-75 border border-black rounded-4">SPACE JOURNEY PANEL</h1>
      </header>
      {
        switchPanel? <Panel /> : <p>Log Section</p>
      }
      {planetsLog.map((planet, index) => (
        <Planet key={index} nombre={planet} />
      ))}
    </div>
  );
}

export default App
