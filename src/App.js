import { Form, Button } from "react-bootstrap";
import "./App.scss";
import React, { useState } from "react";
import { api_key, formForecast } from "./utils";
import "bootstrap/dist/css/bootstrap.min.css";
import Forecast from "./components/Forecast/Forecast";

const App = () => {
	const [city, setCity] = useState("");
	const [forecast, setForecast] = useState(null);
	const [isSearched, setIsSearched] = useState(false);

	const inputHandler = (e) => setCity(e.target.value);

	const submitHandler = async () => {
		setIsSearched(true);
		let data = null;
		let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`);
		if (res.ok) data = await res.json();
		setForecast(data);

		let input = document.querySelector(".form-control");
		setCity("");
		input.focus();
	};

	return (
		<div className="App">
			<div className="header">
				<Form.Control name="city" value={city} onChange={(e) => inputHandler(e)} type="text" placeholder="Enter the name of a city" />
				<Button variant="success" type="submit" onClick={submitHandler}>
					Search
				</Button>
			</div>
			<div className="result">
				{isSearched ? (
					forecast ? (
						<Forecast forecast={formForecast(forecast)} location={forecast && `${forecast.city.name}, ${forecast.city.country}`} />
					) : (
						<h3 className="text-center" style={{ color: "red" }}>
							Not found!
						</h3>
					)
				) : null}
			</div>
		</div>
	);
};

export default App;
