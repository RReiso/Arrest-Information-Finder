import React, { useEffect, useRef, useCallback } from "react";
import { useGlobalContext } from "../context";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";

const URL =
	" https://serene-stream-71987.herokuapp.com/https://www.JailBase.com/api/1/search/?source_id=";

const Search = () => {
	const {
		textInput,
		dropdown,
		setTextInput,
		setDropdown,
		setLoading,
		setPeople,
	} = useGlobalContext();
	const firstUpdate = useRef(true);
	const handleSubmit = (e) => {
		e.preventDefault();
		setTextInput(e.target[0].value);
		setDropdown(e.target[1].value);
	};

	const fetchPeople = async () => {
		try {
			setLoading(true);
			const response = await fetch(`${URL}${dropdown}&last_name=${textInput}`);
			const data = await response.json();
			const { records } = data;
      // console.log(data)
      setLoading(false);
			if (records) {
				setPeople(records);
			} else {
				setPeople([]);
			};
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
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
