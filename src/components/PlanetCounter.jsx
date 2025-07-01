import { useState, useEffect } from "react";

const PlanetCounter=({planetCounter, planetName})=>{

    const [counter, setCounter]=useState(0);
    const [icon, setIcon]=useState('americas');
    const planetsIcons = ['americas','americas-fill','asia-australia','central-south-asia','central-south-asia-fill','europe-africa','europe-africa-fill'];

    const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

    const iconHandler=()=>{
        const number = randomNumber(0, planetsIcons.length -1)
        setIcon(planetsIcons[number]);
    }

    useEffect(iconHandler, [planetCounter]);

    useEffect(()=>{
        setCounter(counter +1)
    },[planetCounter])
    return(
        <div className="w-50 m-1 panel-card rounded-4 border border-black shadow">
            <figure>
                <img className="img-fluid p-2 rounded" src="public\planet-svgrepo-com.svg" alt="Red planet with one ring"/>
                <figcaption className="text-center text-break">
                    Last planet visited <strong>{planetName}</strong> <i className={`bi bi-globe-${icon}`}></i>
                </figcaption>
            </figure>
            
            <h3 className="fs-6 text text-center">VISITED PLANETS</h3>
            <p className="text-bold text-center fs-1">{counter}</p>
        </div>
    );
}
export default PlanetCounter;