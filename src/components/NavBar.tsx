import { FC } from "react";
import { Link } from "react-router-dom";
import { User } from "../models/User";
import { logout } from "../services/AuthenticationService";

interface NavBarProps {
	user: User
}

export const NavBar: FC = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light main-color py-3">
			<div className="container-fluid">
				<span className="navbar-brand">Academia</span>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item m-1">
							{/* <div className="navbar-text">Wecome <h5 className="fw-bold">{user.username}</h5></div> */}
							<div className='inline my-2 my-lg-0 ms-2'><button className='btn btn-primary' onClick={logout}>Logout</button></div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}