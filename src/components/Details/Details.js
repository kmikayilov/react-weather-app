import React from "react";
import { windDirection } from "../../utils";

import "./styles.scss";

const Details = ({ feels_like, humidity, wind, pressure }) => {
	return (
		<div className="details">
			{feels_like && (
				<div className="detail feels_like">
					<img src="weather_icon_set/wi-thermometer.svg" alt="icon" className="icon" />
					{/* <i className="wi wi-thermometer"></i> */}
					<div className="title">Feels like</div>
					<div className="value">{Math.round(feels_like)}&deg;C</div>
				</div>
			)}
			{wind && (
				<div className="detail wind">
					<img src="weather_icon_set/wi-windy.svg" alt="icon" className="icon" />
					<div className="title">Wind</div>
					<div className="value">
						{wind.speed} M/S <img src={windDirection(wind.deg)} alt="icon" className="icon" />
					</div>
				</div>
			)}
			{humidity && (
				<div className="detail humidity">
					<img src="weather_icon_set/wi-raindrops.svg" alt="icon" className="icon" />
					<div className="title">Humidity</div>
					<div className="value">{humidity}%</div>
				</div>
			)}
			{pressure && (
				<div className="detail pressure">
					<img src="weather_icon_set/wi-barometer.svg" alt="icon" className="icon" />
					<div className="title">Pressure</div>
					<div className="value">{pressure} MB</div>
				</div>
			)}
		</div>
	);
};

export default Details;
