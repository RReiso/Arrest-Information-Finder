import React from "react";
import { Link } from "react-router-dom";

const Person = (props) => {
	console.log(props);
	const { name, id, mugshot, book_date_formatted } = props.person;
	return (
		<div className="person">
      <img src={mugshot} alt="mugshot" className="mugshot" />
			<p>
				<span className="property">Name: </span>
				<span className="property-value">{name}</span>
			</p>
			<p>
				<span className="property">Booked: </span>
				<span className="property-value">{book_date_formatted}</span>
			</p>
			
			<Link to={{ pathname: `/person/${id}`, person: props.person }}>
				Details
			</Link>
		</div>
	);
};

export default Person;
