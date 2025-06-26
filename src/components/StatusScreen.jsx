import { useState, useEffect } from "react";

const StatuScreen=({status})=>{

    const [stat, setStat]=useState('');
    
    const statusHandler=()=>{
        setStat(status);
    }

    useEffect(statusHandler,[status])

    return(
        <div className="w-50 m-1 panel-card rounded border border-black">
           {/*  <img src="" alt="spaceship in bad conditions" />
            <img src="" alt="spaceship in good conditions" /> */}
            <i className="bi bi-rocket-takeoff"></i>
            <h3 className="text-center">STATUS</h3>
            <p className="text-center" >{stat}</p>
        </div>
    );
}

export default StatuScreen;