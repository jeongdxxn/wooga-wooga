import React from "react";
import './Forecast.css';

function Forecast({ curWeather }) {
    return (
        <div className="Main-content">
            <span>
                <div>습도</div>
                <div>65%</div>
            </span>
            <span>
                <div>풍속/풍량</div>
                <div>1m/s</div>
            </span>
            <span>
                <div>강수확률</div>
                <div>30%</div>
            </span>
            <span>
                <div>미세먼지</div>
                <div>보통</div>
            </span>
        </div>
    )
}

export default Forecast;