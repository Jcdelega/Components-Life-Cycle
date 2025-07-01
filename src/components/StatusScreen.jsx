import { useState, useEffect } from "react";

const StatuScreen=({status})=>{

    const [stat, setStat]=useState('');
    
    const statusHandler=()=>{
        setStat(status);
    }

    useEffect(statusHandler,[status])

    return(
        <div className="w-50 m-1 panel-card rounded-4 border border-black shadow">
            <img className="img-fluid rounded my-2" src="public\spaceship-svgrepo-com.svg" alt=""/>
            <h3 className="fs-6 text text-center">STATUS</h3>
            <p className="text-center text-success m-3" >
                <i className="bi bi-rocket-takeoff"> </i>
                {stat}
            </p>
        </div>
    );
}

export default StatuScreen;