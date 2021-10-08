import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleHamburger() {
		setIsOpen(!isOpen);
	}
	return (
		<>
			<div className="nav-line">
				<button
					id="hamburger"
					aria-expanded={isOpen === true ? "true" : "false"}
					onClick={toggleHamburger}
				>
					&#9776;
				</button>
			</div>
			<nav
				id="navbar"
				className={isOpen === true ? "nav showNav" : "nav"}
			>
				<ul className="nav-list">
					<li className="nav-link" onClick={toggleHamburger}>
						<Link to="/">Home</Link>
					</li>
					<li className="nav-link" onClick={toggleHamburger}>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
