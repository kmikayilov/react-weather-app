import React from "react";
import { imgs } from "../../utils";
import Details from "../Details/Details";
import "./styles.scss";

const Info = ({ forecast, location }) => {
	let date = null;
	let day = null;
	let month = null;
	let weekDay = null;

	if (forecast) {
		date = new Date(forecast.dt);
		day = date.getDate();
		month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
		weekDay = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
	}

	return forecast ? (
		<div className="info d-flex flex-row justify-content-center align-items-center">
			<div className="current-weather d-flex flex-column flex-grow-1">
				<img className="icon" src={imgs[forecast.icon]} alt="icon" />
				<div className="temperature">{Math.floor(forecast.temp)}&deg;C</div>
				<div className="date">
					{weekDay}, {month} {day}
				</div>
				<div className="location">{location}</div>
				<div className="description">{forecast.desc}</div>
			</div>
			<Details feels_like={forecast.feels_like} wind={forecast.wind} pressure={forecast.pressure} humidity={forecast.humidity} />
		</div>
	) : null;
};

export default Info;
