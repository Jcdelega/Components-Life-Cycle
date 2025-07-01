import DistanceGauge from "./DistanceGauge";
import EnergyGauge from "./EnergyGauge";
import PlanetCounter from "./PlanetCounter";
import StatuScreen from "./StatusScreen";
import { useState, useEffect, useMemo } from "react";

const Panel = ()=>{

    const [distance, setDistance] = useState(0);
    const [percentage, setPercentage]=useState(100);
    const [rocketState, setRocketState] = useState("orbiting...");

    console.log("The planet is visible in the distance.!"); 

    const energyHandler=()=>{
        if(distance %100 === 0 ){
            setPercentage(percentage - 1);
        }
    };

    useEffect(energyHandler, [distance]);

    useEffect(() => {
        const interval = setInterval(() => { 
            setDistance(distance + 1);
        }, 100);

        return () => {
            clearInterval(interval); 
            console.log("The planet has vanished."); 
        };
    }, []);

    const stateMessage = useMemo(() => {
        return `State: ${rocketState}`;
    }, [rocketState]);

    return(
        <main className="panel row border border-black m-4 rounded-3">
            <section className="d-flex justify-content-center">
                <h1 className="fs-4 shadow text-center text-break my-2 py-2 py-sm-5 w-75 border border-black rounded-4">SPACE JOURNEY PANEL</h1>
            </section>
            <section className="d-flex justify-content-evenly" >
                <DistanceGauge distance={distance}/>
                <EnergyGauge gauge={percentage}/>
            </section>
            <section className="d-flex">
                <StatuScreen status={stateMessage}/>
               <PlanetCounter planetCounter={0} planetName={'Titan'}/>
            </section>
        </main>
    );
}

export default Panel;