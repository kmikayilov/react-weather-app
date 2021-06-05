import React, { Fragment, useState } from "react";
import DayCard from "../DayCard/DayCard";
import HourCard from "../HourCard/HourCard";
import Info from "../Info/Info";

const Forecast = ({ forecast, location }) => {
	const [dayIndex, setDayIndex] = useState(0);
	const [hourIndex, setHourIndex] = useState(0);

	let daysList = [];
	let day = [];

	if (forecast && forecast.length > 0) {
		let dayDate;

		forecast.forEach((item, intex) => {
			if (dayDate === undefined) {
				dayDate = item.dt.split("T")[0];
				day.push(item);
			} else {
				const currentDate = item.dt.split("T")[0];
				if (dayDate === currentDate) {
					day.push(item);
				} else {
					daysList.push(day);
					day = [];
					day.push(item);
					dayDate = currentDate;
				}
			}
		});
	}

	return (
		daysList.length > 0 && (
			<Fragment>
				<Info forecast={daysList[dayIndex][hourIndex]} location={location} />
				<div className="cards hour-cards">
					{daysList[dayIndex] &&
						daysList[dayIndex].map((hour, i) => {
							return <HourCard key={i} forecast={hour} isSelected={i === hourIndex} index={i} setActiveHour={() => setHourIndex(i)} />;
						})}
				</div>

				<div className="cards day-cards">
					{daysList &&
						daysList.map((day, i) => {
							return <DayCard key={i} forecast={day} index={i} isSelected={i === dayIndex} setActiveDay={() => setDayIndex(i)} />;
						})}
				</div>
			</Fragment>
		)
	);
};

export default Forecast;
