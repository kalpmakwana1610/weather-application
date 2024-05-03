import React from "react";
import "./Result.css";
import Weatherhome from "./Weatherhome";


const Result = (props) => {
  return (
    <div className="mainresult">
    
      
      <div className="temp">
        <div className="hightemp">
          hightemp <br />
          40C
       
        </div>
        <div className="lowtemp">
          lowtemp <br /> 23C
        </div>
      </div>
      <div className="other">
        <div className="humidity">
          humidity <br />
          15%
        </div>
        <div className="wind">
          wind <br />
          18 km/h
        </div>
      </div>
    </div>
  );
};
export default Result;
