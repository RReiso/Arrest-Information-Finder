import React from "react";
import { Link } from "react-router-dom";

const Person = (props) => {
	console.log(props);
	const { county_state, name, charges, id } = props.person;
	return (
		<div className="person">
			<p>
				<span className="property">Name: </span>
				<span className="property-value">{name}</span>
			</p>
			<p>
				<span className="property">Charges: </span>
				<span className="property-value">
					{charges.map((ch) => {
						if (ch === charges[charges.length - 1]) {
							return `${ch}.`;
						} else {
							return `${ch}, `;
						}
					})}
				</span>
			</p>
			<p>
				<span className="property">County, State: </span>
				<span className="property-value">{county_state}</span>
			</p>
			<Link to="/person/:id">Details</Link>
		</div>
	);
};

export default Person;
