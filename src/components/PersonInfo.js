import React from "react";

const PersonInfo = (props) => {
	const { county_state, charges, details, id } = props.person;
	if (props.isModalOpen) {
		return (
			<div className="person-details">
				<div className="person-description">
					<p>
						<span className="property">County, state: </span>
						<span className="property-value">{county_state}</span>
					</p>
					<p>
						<span className="property">Charges: </span>
						<span className="property-value">
							{charges.map((ch, idx) => {
								if (idx === charges.length - 1) {
									return `${ch}`;
								} else {
									return `${ch}; `;
								}
							})}
						</span>
					</p>

					{details.map((property) => {
						if (property[0] === "Age (at arrest)") {
							return (
								<p key={`${id}-age`}>
									<span className="property">Age at arrest: </span>
									<span className="property-value">{property[1]}</span>
								</p>
							);
						}
						if (property[0] === "Race") {
							return (
								<p key={`${id}-race`}>
									<span className="property">Race: </span>
									<span className="property-value">{property[1]}</span>
								</p>
							);
						}
						if (property[0] === "Race") {
							return (
								<p key={`${id}-gender`}>
									<span className="property">Gender: </span>
									<span className="property-value">{property[1]}</span>
								</p>
							);
						}
						return null;
					})}
				</div>
			</div>
		);
	}
	return null;
};

export default PersonInfo;
