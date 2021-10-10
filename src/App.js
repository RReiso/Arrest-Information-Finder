import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
	return (
			<BrowserRouter>
				<header>
					<Navbar />
				</header>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</BrowserRouter>
	);
}

export default App;
