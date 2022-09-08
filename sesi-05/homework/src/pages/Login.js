import React from "react";

const Login = () => {
	return (
		<div className="h-screen">
			<div className="card w-full bg-primary text-primary-content m-10 container mx-auto">
				<div className="card-body">
					<h2 className="card-title">Menu Login</h2>
					<div class="form-control">
						<label class="label">
							<span class="label-text">Your Email</span>
						</label>
						<label class="input-group input-group-vertical">
							<span>Email</span>
							<input type="text" placeholder="info@site.com" class="input input-bordered" />
						</label>
						<label class="label">
							<span class="label-text">Your Pasword</span>
						</label>
						<label class="input-group input-group-vertical">
							<span>Password</span>
							<input type="password" placeholder="Password" class="input input-bordered" />
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