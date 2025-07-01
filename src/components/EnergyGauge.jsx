import { useState, useEffect } from "react";

const EnergyGauge=({gauge})=>{

    const [status, setStatus]=useState('FULL')
    const [energy,setEnergy]=useState(100);
    
    useEffect(() => {
    console.log("Full energy !"); // Update
    }, []);

    const energyHandler=()=>{
        setEnergy(gauge)
        if(energy === 0 ){
            setEnergy(energy - 1);
        }else{
            setStatus('EMPTY')
        }
    };

    useEffect(energyHandler, [gauge]); 
    
   /*  const stateFuel = useMemo(() => {
            setKm(distance)
            if(km %100 === 0 && energy!=0 ){
                setEnergy(energy - 1);
            }else{
                setStatus('EMPTY')
            }
            return energy;
        }, [distance]); */

    return(
        <div className="panel-card w-50 m-1 rounded-4 border border-black shadow">
            <h3 className={`fs-6 text text-center text-success m-2 `}> <strong>{status}</strong> </h3>
            <figure>
                <img className="img-fluid m-4 rounded" src="public\gas-station-fuel-svgrepo-com (1).svg" alt="gas machine" />
                <figcaption className="m-1">
                    <em>Check twice the energy...</em>
                </figcaption>
            </figure>
            <p className="text-center">
                <i className="bi bi-fuel-pump"> {energy} %</i>
            </p>
        </div>
    );
}

export default EnergyGauge;