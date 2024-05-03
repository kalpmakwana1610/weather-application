import React, { useRef } from "react";
import "./Weather.css";
import Result from "./Result";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Weatherhome = () => {
  const [weatherresult, setWeatherresult] = useState([]);
  const [isclicked, setIsclicked] = useState(false);
  const [inputtext, setInputtext] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(false);

  const datashow = () => {
    // const city = "surat";
    // axios
    //   .get(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${inputtext}&appid=f476f2a4de7ccf606a7e3b3ca96d53cb&units=metric`
    //   )
    //   .then((response) => {
    //     //  console.log(response);
    //     console.log(response.data);
    //     // console.log(response.data.main.temp_max);
    //     setWeatherresult(response.data);
    //     setResult(true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleclick = () => {
    setIsclicked(true);
    if (inputtext === "") {
      setError("please enter city name");
      setResult(false);
    } else {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${inputtext}&appid=f476f2a4de7ccf606a7e3b3ca96d53cb&units=metric`
        )
        .then((response) => {
          setWeatherresult(response.data);
          setResult(true);
          console.log(response.data);
          setError("");
        })
        .catch((error) => {
          console.log("exception = " + error);
          setError("city not found");
          setResult(false);
        });
    }
  };

  return (
    <div>
      <div className="main">
        <h1>Weather App</h1>
        <div className="searchbar">
          <input
            type="text"
            value={inputtext}
            onChange={(e) => {
              setInputtext(e.target.value);
            }}
            placeholder="    enter city name"
          />
          <button className="Search" onClick={() => handleclick()}>
            Search
          </button>
          <br />
          <h1>{error}</h1>
        </div>

        {result ? (
          <>
            <div className="mainresult">
              <h1 className="name">{weatherresult.name}</h1>
              <div className="temprature">
                temprature <br />
                {weatherresult.main.temp}°C
              </div>
              <div className="tempr">
                <div className="hightemp">
                  hightemp <br />
                  {weatherresult.main.temp_max}°C
                </div>
                <div className="lowtemp">
                  lowtemp <br />
                  {weatherresult.main.temp_min}°C
                </div>
              </div>
              <div className="other">
                <div className="humidity">
                  humidity <br />
                  {weatherresult.main.humidity}
                </div>
                <div className="wind">
                  wind <br />
                  {weatherresult.wind.speed} km/hr
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Weatherhome;
// f476f2a4de7ccf606a7e3b3ca96d53cb
// f476f2a4de7ccf606a7e3b3ca96d53cb  key
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f476f2a4de7ccf606a7e3b3ca96d53cb&units=metric
