import React from "react";
import './RegionAndTemp.css';

function RegionAndTemp({ propsData }) {

    console.log(propsData)
    const temp = Math.floor(propsData.main.temp - 273.15)
    const city = propsData.name
    const { humidity } = propsData.main
    const { speed } = propsData.wind
    const howsTheWeather = (temp) => {
        let weatherStr = ''
        if(temp < 5) weatherStr = `It's getting Cold`
        else if (5 <= temp && temp < 25) weatherStr = `It's Good day`
        else if (25 <= temp) weatherStr = `It's getting Hot`

        if(propsData.rain) weatherStr = `It's going to Rainy`
        if(propsData.snow) weatherStr = `It's going to Snow`

        return weatherStr;
    } 

    return (
        <div>
            <div className="Main-content-RT">
                <span>
                    <div className="Region">
                        {city}
                    </div>
                    <div className="Condition">
                        {howsTheWeather(temp)}
                    </div>
                </span>
                <span className="Temperature">
                    {temp}°
                </span>
            </div>
            <div className="Main-content-F">
                <span>
                    <div>습도</div>
                    <div>{humidity}%</div>
                </span>
                <span>
                    <div>풍속</div>
                    <div>{speed}m/s</div>
                </span>
                <span>
                    <div>미세먼지</div>
                    <div>보통</div>
                </span>
            </div>
        </div>
    )
}

export default RegionAndTemp;