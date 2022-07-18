import React from "react";
import ReactDOM from "react-dom";
import {TestComponent} from "./components/TestComponent"

const App = () => {
	return (
		<div>
			<h1>Hello!!</h1>
			<h2>Welcome to your First React App..</h2>
			<TestComponent num={123}/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
