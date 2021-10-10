import React from "react";
import PeopleList from "../components/PeopleList";
import Search from "../components/Search";

const Home = () => {
	return (
		<main>
			<section>
				<Search />
				<PeopleList />
			</section>
		</main>
	);
};

export default Home;
