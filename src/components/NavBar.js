import { Link } from "react-router-dom";

const NavBar = (props) => {
	const { user, setUser } = props;
	const logout = () => {
		window.localStorage.removeItem('loggedInUser');
		setUser(null);
	}

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Academia</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
				data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" 
				aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">Home</Link>
						</li>
					</ul>
					<div className="navbar-text">Wecome <h5 className="fw-bold">{user.username}</h5></div>
					<div className='inline my-2 my-lg-0 ms-2'><button className='btn btn-primary' onClick={logout}>Logout</button></div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar;