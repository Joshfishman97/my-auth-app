import React from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
export function Dashboard() {
	const { store, actions } = React.useContext(Context);
	const history = useHistory();
	return (
		<div className="container">
			<h2>Dashboard</h2>
			<button className="btn btn-outline-primary" onClick={() => history.push("/login")}>
				Log Out
			</button>
		</div>
	);
}
