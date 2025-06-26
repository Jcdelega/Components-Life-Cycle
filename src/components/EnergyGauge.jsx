import { useState, useEffect } from "react";

const EnergyGauge=({percentage, status})=>{

    const [energy, setEnergy]= useState(percentage || 0);

    const energyHandler=()=>{
        setEnergy(percentage);
    }

    useEffect(energyHandler, [percentage]);

    return(
        <div className="panel-card w-50 m-1 rounded border border-black">
            <h3 className="text-center">{status}</h3>
            <figure>
                <img src="null" alt="gas machine" />
                <figcaption>
                    <i className="bi bi-fuel-pump"></i>
                </figcaption>
            </figure>
            <p className="text-center">{energy}%</p>
        </div>
    );
}

export default EnergyGauge;