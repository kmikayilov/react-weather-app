const iconPath = "weather_icon_set";

export const api_key = "dc1e35bf5c26b01c5bbe91dd1c848668";

export const formForecast = (forecast) => {
	let res = [];
	if (forecast) {
		res = forecast.list.map((data) => {
			return {
				dt: data.dt_txt.replace(" ", "T"),
				visibility: data.visibility,
				temp: data.main.temp - 273.15,
				feels_like: data.main.feels_like - 273.15,
				temp_min: data.main.temp_min - 273.15,
				temp_max: data.main.temp_max - 273.15,
				humidity: data.main.humidity,
				pressure: data.main.pressure,
				icon: data.weather[0].icon,
				desc: data.weather[0].description,
				clouds: data.clouds.all,
				wind: data.wind,
				rain: data.rain ? data.rain["3h"] : 0,
			};
		});
	}
	return res;
};

export const windDirection = (degree) => {
	if (degree > 337.5) return `${iconPath}/wi-direction-up.svg`;
	if (degree > 292.5) return `${iconPath}/wi-direction-up-left.svg`;
	if (degree > 247.5) return `${iconPath}/wi-direction-left.svg`;
	if (degree > 202.5) return `${iconPath}/wi-direction-down-left.svg`;
	if (degree > 157.5) return `${iconPath}/wi-direction-down.svg`;
	if (degree > 122.5) return `${iconPath}/wi-direction-down-right.svg`;
	if (degree > 67.5) return `${iconPath}/wi-direction-right.svg`;
	if (degree > 22.5) return `${iconPath}/wi-direction-up-right.svg`;
	else return `${iconPath}/wi-direction-up.svg`;
};

export const imgs = {
	"01d": `${iconPath}/wi-day-sunny.svg`,
	"01n": `${iconPath}/wi-night-clear.svg`,
	"02d": `${iconPath}/wi-day-cloudy.svg`,
	"02n": `${iconPath}/wi-night-partly-cloudy.svg`,
	"03d": `${iconPath}/wi-cloudy.svg`,
	"03n": `${iconPath}/wi-night-cloudy.svg`,
	"04d": `${iconPath}/wi-cloudy.svg`,
	"04n": `${iconPath}/wi-cloudy.svg`,
	"09d": `${iconPath}/wi-day-sprinkle.svg`,
	"09n": `${iconPath}/wi-night-sprinkle.svg`,
	"10d": `${iconPath}/wi-day-rain.svg`,
	"10n": `${iconPath}/wi-night-rainy.svg`,
	"11d": `${iconPath}/wi-day-thunderstorm.svg`,
	"11n": `${iconPath}/wi-night-thunderstorm.svg`,
	"13d": `${iconPath}/wi-day-snow.svg`,
	"13n": `${iconPath}/wi-night-snow.svg`,
	"50d": `${iconPath}/wi-day-fog.svg`,
	"50n": `${iconPath}/wi-night-fog.svg`,
};
