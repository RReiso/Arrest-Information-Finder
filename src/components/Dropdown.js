import React from "react";
import countyData from "../county-jail-data.json";

const Dropdown = () => {
	return (
		<>
			<label htmlFor="organistaion">Sheriff's Office:</label>
			<select className="select" name="organisations" id="organisations">
				{countyData.records.map((organisation) => {
					return (
						<option key={organisation.source_id} value={organisation.source_id}>
							{organisation.name}
						</option>
					);
				})}
			</select>
		</>
	);
};

export default Dropdown;
