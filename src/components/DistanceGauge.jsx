import { useState, useEffect } from "react";

const DistanceGauge=({distance})=>{

    const [km, setKm,]=useState(distance || 0);

    const distanceHandler=()=>{
        setKm(distance + 1);
    };

    useEffect(distanceHandler,[distance]);
    return(
        <div className="panel-card w-50 m-1 rounded-4 border border-black shadow" >
            <figure>
                <img className="img-fluid rounded p-3" src="public\line-graph-chart-svgrepo-com.svg" />
                <figcaption className="m-1">What coudl be wrong?</figcaption>
            </figure>
            <h3 className="text-center">DISTANCE</h3>
            <p className="text-center">
            <i className="bi bi-graph-up-arrow m-4"> {km} KM</i>
            </p>
        </div>
    );
}

export default DistanceGauge;