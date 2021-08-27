import React from "react";

export function RegisterUser() {
	return (
		<div>
			<div className="container" />
			<div className="form-floating mb-3">
				<label>Email address</label>
				<input type="email" className="form-control" placeholder="name@example.com" />
			</div>
			<div className="form-floating">
				<input type="password" className="form-control" placeholder="Password" />
				<label>Password</label>
			</div>

			<button className="btn btn-primary mt-3">Register</button>
		</div>
	);
}
