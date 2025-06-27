import { useState, useEffect } from "react";

const EnergyGauge=({distance})=>{

    const [status, setStatus]=useState('FULL')
    const [energy,setEnergy]=useState(100);
    const [km, setKm]=useState(distance || 0);
    
    useEffect(() => {
    console.log("Full energy !"); // Update
    }, []);

    const energyHandler=()=>{
        setKm(distance)
        if(km %100 === 0 && energy!=0 ){
            setEnergy(energy - 1);
        }else{
            setStatus('EMPTY')
        }
    };

    useEffect(energyHandler, [distance]); 
    
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
            <h3 className={`text-center text-success`}> <strong>{status}</strong> </h3>
            <figure>
                <img className="img-fluid m-4 rounded" src="public\gas-station-fuel-svgrepo-com (1).svg" alt="gas machine" />
                <figcaption className="m-1">
                    <em>Check twice the energy before sailaway</em>
                </figcaption>
            </figure>
            <p className="text-center">
                <i className="bi bi-fuel-pump"> {energy} %</i>
            </p>
        </div>
    );
}

export default EnergyGauge;