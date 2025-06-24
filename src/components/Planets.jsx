import React, { useEffect } from 'react';

const Planet=({ name }) =>{
  useEffect(() => {
    console.log(`¡Planet ${name} has appeared!`); 

    return () => {
      console.log(`¡Planet ${name} has vanished!`); // Desmontaje
    };
  }, []);

  return <div>{name}</div>;
}
export default Planet;