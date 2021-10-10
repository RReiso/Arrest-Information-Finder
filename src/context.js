import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [people, setPeople] = useState(["0"]);

	return (
		<AppContext.Provider
			value={{
				loading,
				people,
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
