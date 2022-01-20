import React from "react";
import './RegionAndTemp.css';

function RegionAndTemp({ curWeather }) {

    // const temp = Math.floor(curWeather.main.temp - 273.15)
    // console.log(curWeather.main.temp)

    return (
        <div className="Main-content">
            <span>
                <div className="Region">
                    Daegu
                </div>
                <div className="Condition">
                    It's getting Cold
                </div>
            </span>
            <span className="Temperature">
                temp°
            </span>
        </div>
    )
}

export default RegionAndTemp;