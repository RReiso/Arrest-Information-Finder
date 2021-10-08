import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section className="section error">
			<p className="error-statement">Oops! Page not found!</p>
			<p className="404">404</p>
			<p className="error-statement">
				We are sorry, but the page you requested was not found!
			</p>
			<Link to="/">Back to Home</Link>
		</section>
	);
};

export default Error;
