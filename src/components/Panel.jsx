import DistanceGauge from "./DistanceGauge";
import EnergyGauge from "./EnergyGauge";
import PlanetCounter from "./PlanetCounter";
import StatuScreen from "./StatusScreen";
import { useState, useEffect, useMemo, useCallback } from "react";

const Panel = ()=>{

    const [distance, setDistance] = useState(0);
    const [percentage, setPercentage]=useState(100);
    const [rocketState, setRocketState] = useState("orbiting...");
    const [randomDistance, setRandomDistance]=useState(120)

    console.log("The planet is visible in the distance.!"); 

    const randomNumber = useCallback((min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    },[]);

    const handlerButton=useCallback(()=>{
        setRandomDistance(randomNumber(120,1500));
        console.log(randomDistance);
    },[]);

    const energyHandler=()=>{
        if(distance %100 === 0 ){
            setPercentage(percentage - 1);
        }
    };

    useEffect(energyHandler, [distance]);

    useEffect(() => {
        const interval = setInterval(() => { 
             if(distance === randomDistance) {
                setRocketState('Landing');
                setTimeout(()=>{
                    setRocketState(`We've have landed`)
                },5000)
            return;
            };
            setDistance(distance + 1);
        }, 100);
        return () => {
            clearInterval(interval); 
            console.log("The planet has vanished."); 
        };
    }, []);

    const stateMessage = useMemo(() => {
        return `State: ${rocketState}`;
    }, [randomDistance]);

    return(
        <main className="panel row border border-black mx-4 rounded-3">
            <section className="d-flex justify-content-evenly" >
                <DistanceGauge distance={distance}/>
                <EnergyGauge gauge={percentage}/>
            </section>
            <section className="d-flex align-items-center justify-content-center">
                <p className="text-break text-center m-auto">
                <button
                    className= 'rounded w-75 text-light-emphasis'
                    onClick={handlerButton}
                >
                    Take off hyperspace
                </button>
            </p>
            </section>
            <section className="d-flex">
                <StatuScreen status={stateMessage}/>
               <PlanetCounter planetCounter={0} planetName={'Titan'}/>
            </section>
        </main>
    );
}

export default Panel;