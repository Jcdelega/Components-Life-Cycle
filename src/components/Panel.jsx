import DistanceGauge from "./DistanceGauge";
import EnergyGauge from "./EnergyGauge";
import PlanetCounter from "./PlanetCounter";
import StatuScreen from "./StatusScreen";


const spaceShipConsole = ()=>{
    return(
        <div className="panel row border border-black m-4 rounded-3">
            <div className="d-flex justify-content-center">
                <h1 className="text-center text-break my-2 py-2 w-75 border border-black rounded-4">SPACE JOURNEY PANEL</h1>
            </div>
            <div className="d-flex justify-content-evenly" >
                <DistanceGauge distance={1526}/>
                <EnergyGauge/>
            </div>
            <div className="d-flex">
                <StatuScreen status={'OK'}/>
               <PlanetCounter planetCounter={0} planetName={'Titan'}/>
            </div>
        </div>
    );
}

export default spaceShipConsole;