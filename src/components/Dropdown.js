import React from "react";
// import { useGlobalContext } from "../context";

const Dropdown = () => {
	// const { setDropdown } = useGlobalContext();

	return (
		<>
			<label htmlFor="cars">Choose a car:</label>

			<select name="cars" id="cars">
				<option value="az-mcso">arizona</option>
				<option value="saab">Saab</option>
				<option value="mercedes">Mercedes</option>
				<option value="audi">Audi</option>
			</select>
		</>
	);
};

export default Dropdown;
