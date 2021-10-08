import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const PeopleList = () => {
	const { people, loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}
	if (people.length === 0) {
		return <p>No matches were found!</p>;
	}
	return <div className="people">hffgfgfg</div>;
};

export default PeopleList;
