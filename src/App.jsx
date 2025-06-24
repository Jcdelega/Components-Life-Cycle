import React, { useState, useEffect, useMemo } from 'react';
import Planet from './components/Planets';
import './App.css'

function App() {
  const [energy,setEnergy]=useState(100);
  const [distance, setDistance] = useState(0);
  const [rocketState, setRocketState] = useState("orbiting");
  const [planetsLog, setPlanetsLog] = useState([]);

  useEffect(() => {
    console.log("¡The planet is ready!"); 

    const interval = setInterval(() => { 
    }, 1000);

    return () => {
      clearInterval(interval); 
      console.log("The planet has vanished."); 
    };
  }, []);

  useEffect(() => {
    console.log("Full energy !"); // Update
  }, [energy]);

  const stateMessage = useMemo(() => {
    return `State: ${rocketState}`;
  }, [rocketState]);

  return (
    <div>
      {/* ... (Panel information) */}
      {planetsLog.map((planet, index) => (
        <Planet key={index} nombre={planet} />
      ))}
    </div>
  );
}

export default App
