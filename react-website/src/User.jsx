import { useState } from 'react';
import { fetchLogin, fetchRegister, fetchLogout } from './fake-services/fake-services'
import './User.css';

function User({currentUser, setCurrentUser}) {
	const [statusMessage, setStatusMessage] = useState("");

	const [loginName, setLoginName] = useState("");
	function handleLogin(event) {
		event.preventDefault();
		if (currentUser) {
			setStatusMessage("Login unsuccessful - already logged in");
			return;
		}

		fetchLogin(loginName)
		.then( response => {
			setStatusMessage("Login successful - " + loginName);
			setCurrentUser(loginName);
		})
		.catch( response => {
			setStatusMessage(response["error"] + " - " + loginName);
		});
	}

	const [registerName, setRegisterName] = useState("");
	function handleRegister(event) {
		event.preventDefault();
		fetchRegister({username: registerName, password: ""}) // let password always be empty
		.then( response => {
			setStatusMessage("Register successful - " + registerName);
		})
		.catch( response => {
			setStatusMessage(response["error"] + " - " + registerName)
		});
	}

	function handleLogout(event) {
		event.preventDefault();
		if (!currentUser) {
			setStatusMessage("Logout unsuccessful - not logged in");
			return;			
		}
		fetchLogout();
		setCurrentUser("");
		setStatusMessage("Logout successful");
	}

	return (
		<div className="user">
			<p>Here you can register a username, login via a username, or logout.</p>

			<p>We only use username but not password, not due to our backend service's inability to handle password, but due to Pao Pao's generosity.</p>

			<p className="status-msg">Status message (if any): {statusMessage}</p>

			<div className="functionalities">
				<div className="login">
					<form className="login-form" onSubmit={handleLogin}>
						<label><span>Login User Name:</span><input type="name" value={loginName} onChange={ (e) => setLoginName(e.target.value) } required/></label>
						<div className="submit-button-div">
	          				<button type="submit">Login</button>
	        			</div>
        			</form>
				</div>

				<div className="register">
					<form className="register-form" onSubmit={handleRegister}>
						<label><span>Register A New User Name:</span><input type="name" value={registerName} onChange={ (e) => setRegisterName(e.target.value) } required/></label>
						<div className="submit-button-div">
	          				<button type="submit">Register</button>
	        			</div>
        			</form>
				</div>

				<div className="logout">
	          		<button type="submit" onClick={handleLogout}>Logout Current User</button>
				</div>								
			</div>
		</div>
	);
}

export default User;