import React from "react";
import { imgs } from "../../utils";

import "./styles.scss";

const HourCard = ({ forecast, isSelected, setActiveHour }) => {
	const date = new Date(forecast.dt);
	const time = date.getHours() > 12 ? `${date.getHours() - 12} PM` : `${date.getHours()} AM`;

	return (
		<div className={["card", "hour-card", isSelected ? "active" : null].join(" ")} onClick={setActiveHour}>
			<div className="temp">{Math.round(forecast.temp)}&deg;C</div>
			<img src={imgs[forecast.icon]} alt="icon" className="icon" />
			<div className="date">{time}</div>
		</div>
	);
};

export default HourCard;
