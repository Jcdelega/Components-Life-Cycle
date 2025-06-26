import { useState, useEffect } from "react";

const DistanceGauge=({distance})=>{

    const [km, setKm,]=useState(distance || 0);

    const distanceHandler=()=>{
        setKm(distance);
    };

    useEffect(distanceHandler,[distance]);
    return(
        <div className="panel-card w-50 m-1 rounded border border-black" >
            <figure>
                <figcaption></figcaption>
            </figure>
            <i className="bi bi-graph-up-arrow"></i>
            <h3 className="text-center">DISTANCE</h3>
            <p className="text-center">{km} KM</p>
        </div>
    );
}

export default DistanceGauge;