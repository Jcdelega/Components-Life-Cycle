import { useState, useEffect } from "react";

const PlanetCounter=({planetCounter, planetName})=>{

    const [counter, setCounter]=useState(0);
    const [icon, setIcon]=useState('americas');
    const planetsIcons = ['americas','americas-fill','asia-australia','central-south-asia','central-south-asia-fill','europe-africa','europe-africa-fill'];

    const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

    const iconHandler=()=>{
        const number = randomNumber(0, planetsIcons.length)
        setIcon(planetsIcons[number]);
    }

    useEffect(iconHandler, [planetCounter]);

    useEffect(()=>{
        setCounter(counter +1)
    },[planetCounter])

    return(
        <div className="w-50 m-1 panel-card rounded border border-black">
            <figure>
                <img className="img-fluid my-2 rounded" src="https://wallpapers.com/images/hd/3d-polygon-black-planet-gt2nxmgqfy6qdah5.jpg" alt="Planet "/>
                <figcaption className="text-center text-break">
                    Last planet visited {planetName}
                </figcaption>
            </figure>
            <i className={`bi bi-globe-${icon}`}></i>
            <h3 className="text-center">VISITED PLANETS</h3>
            <p className="text-bold text-center fs-1">{counter}</p>
        </div>
    );
}
export default PlanetCounter;