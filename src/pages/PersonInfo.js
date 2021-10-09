import React from "react";
import { useLocation } from "react-router";

const PersonInfo = (props) => {
	const location = useLocation();
	// console.log(location.person);
	const { county_state, name, charges, details, mugshot, book_date_formatted } = location.person;

	return (
		<section calssName="person-info">
			<div className="img-container">
				<img src={mugshot} alt="mugshot" />
			</div>
			<div className="person-description">
				<p>
					<span className="property">Name: </span>
					<span className="property-value">{name}</span>
				</p>
				<p>
					<span className="property">County, state: </span>
					<span className="property-value">{county_state}</span>
				</p>
				<p>
					<span className="property">Booked: </span>
					<span className="property-value">{book_date_formatted}</span>
				</p>
				<p>
					<span className="property">Charges: </span>
					<span className="property-value">
						{charges.map((ch, idx) => {
							if (idx === charges.length - 1) {
								return `${ch}.`;
							} else {
								return `${ch}, `;
							}
						})}
					</span>
				</p>

				{details.slice(0, 3).map((property) => {
					return (
						<p>
							<span className="property">{property[0]}: </span>
							<span className="property-value">{property[1]}</span>
						</p>
					);
				})}
			</div>
		</section>
	);
};

export default PersonInfo;
