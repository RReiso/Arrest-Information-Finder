import React, { useState } from "react";
import PersonInfo from "./PersonInfo";

const Person = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { name, id, mugshot, book_date_formatted } = props.person;
	return (
		<div className="person" id={id}>
			<img src={mugshot} alt="mugshot" className="mugshot" />
			<p>
				<span className="property">Name: </span>
				<span className="property-value">{name}</span>
			</p>
			<p>
				<span className="property">Booked: </span>
				<span className="property-value">{book_date_formatted}</span>
			</p>
      <PersonInfo person={props.person} isModalOpen={isModalOpen} />
			<a
				href={`#${id}`}
				className={
					isModalOpen ? "link grey" : "link blue"
				}
				onClick={() => {
					setIsModalOpen(!isModalOpen);
				}}
			>
				{isModalOpen ? "Less details" : "More details"}
			</a>
		</div>
	);
};

export default Person;
