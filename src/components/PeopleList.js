import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import Person from "./Person";

const PeopleList = () => {
	const { people, loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}

	if (people.length === 0) {
		return <p>No matches were found!</p>;
	}
	if (people[0] === "0") {
		return null;
	}
	return (
		<div className="people">
			{people.map((person) => {
				return <Person key={person.id} person={person} />;
			})}
		</div>
	);
};

export default PeopleList;
