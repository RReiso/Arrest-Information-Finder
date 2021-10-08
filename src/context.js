import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [textInput, setTextInput] = useState("");
	const [dropdown, setDropdown] = useState("");
	const [people, setPeople] = useState(["0"]);

	return (
		<AppContext.Provider
			value={{
				loading,
				people,
				textInput,
				dropdown,
				setTextInput,
				setDropdown,
				setLoading,
				setPeople,
			}}
		>
			<div>{children}</div>
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
