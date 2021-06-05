import React from "react";
import { imgs } from "../../utils";

import "./styles.scss";

const DayCard = ({ forecast, isSelected, setActiveDay }) => {
	const tempMaxAndMin = forecast.reduce(
		(acc, current) => {
			if (current.temp_max > acc.max) acc.max = current.temp_max;
			if (current.temp_min < acc.min) acc.min = current.temp_min;
			return acc;
		},
		{ max: Number.MIN_VALUE, min: Number.MAX_VALUE }
	);

	const date = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date(forecast[0].dt));

	return (
		<div className={["card", "day-card", isSelected ? "active" : null].join(" ")} onClick={setActiveDay}>
			<div className="temp">
				<span style={{ marginTop: "30px" }}>{Math.round(tempMaxAndMin.min * 10) / 10}&deg;C</span>
				<span style={{ marginBottom: "30px" }}>{Math.round(tempMaxAndMin.max * 10) / 10}&deg;C</span>
			</div>
			<img src={imgs[forecast[0].icon]} alt="icon" className="icon" />
			<div className="date">{date}</div>
		</div>
	);
};

export default DayCard;
