import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navRef = useRef();
	const hamRef = useRef();

	function toggleHamburger() {
		navRef.current.classList.toggle("showNav");
		if (hamRef.current.getAttribute("aria-expanded") == "false") {
			hamRef.current.setAttribute("aria-expanded", "true");
		} else {
			hamRef.current.setAttribute("aria-expanded", "false");
		}
	}
	return (
		<>
			<div className="nav-line">
				<button
					id="hamburger"
					aria-Expanded="false"
					ref={hamRef}
					onClick={toggleHamburger}
				>
					&#9776;
				</button>
			</div>
			<nav id="navbar" className="nav" ref={navRef}>
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
