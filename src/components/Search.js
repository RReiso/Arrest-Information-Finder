import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";

const URL =
	" https://serene-stream-71987.herokuapp.com/https://www.JailBase.com/api/1/search/?source_id=";

const Search = () => {
	const { textInput, dropdown, setTextInput, setDropdown, setLoading } =
		useGlobalContext();
	const firstUpdate = useRef(true);
	const handleSubmit = (e) => {
		e.preventDefault();
		setTextInput(e.target[0].value);
		setDropdown(e.target[1].value);
	};

	const fetchPeople = async () => {
		console.log(`${URL}${dropdown}&last_name=${textInput}`);
		console.log("heer");
		setLoading(true);
		const response = await fetch(`${URL}${dropdown}&last_name=${textInput}`);
		const data = await response.json();
		console.log(data);
		try {
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		console.log("KAKAKAKA");
		console.log(textInput);
		console.log(dropdown);
		fetchPeople();
	}, [textInput, dropdown]);

	return (
		<form className="form" onSubmit={handleSubmit}>
			<TextInput />
			<Dropdown />
			<button type="submit">Search</button>
		</form>
	);
};

export default Search;
