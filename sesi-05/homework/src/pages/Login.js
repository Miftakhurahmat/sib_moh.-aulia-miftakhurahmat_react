import React from "react";

const Login = () => {
	return (
		<div className="h-screen">
			<div className="card w-full bg-primary text-primary-content m-10 container mx-auto">
				<div className="card-body">
					<h2 className="card-title">Menu Login</h2>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Your Email</span>
						</label>
						<label className="input-group input-group-vertical">
							<span>Email</span>
							<input type="text" placeholder="info@site.com" className="input input-bordered" />
						</label>
						<label className="label">
							<span className="label-text">Your Pasword</span>
						</label>
						<label className="input-group input-group-vertical">
							<span>Password</span>
							<input type="password" placeholder="Password" className="input input-bordered" />
						</label>
					</div>
					<div className="card-actions justify-end">
					<button className="btn">Login</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;