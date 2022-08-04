import { useState } from 'react';
import { fetchFromRemote } from './js/fetch';
import logo from './pic/logo.png';
import './Privacy.css';
import './fontawesome/css/all.css';

function Privacy() {
	const [currentPic, setCurrentPic] = useState(logo);
	const [isLoading, setIsLoading] = useState(false);

	function handleFetch() {	
		fetchFromRemote(setIsLoading)
		.then(response => setCurrentPic(response))
		.catch(() => setCurrentPic(logo))
	}

	return (
		<div className="privacy">
			<p>This website collects some of your info. For example, username, email address, comments, etc.</p>
			<p>These info will be stored responsibly by Pao Pao. However, in case Pao Pao mishandled you data, she assumes no liability.</p>
			<p>The logo for this website is a picture of Pao Pao herself, and the following "spinner" when a picture is loading is from font-awesome. If you prefer to see other cats, try the button below, and it will give you a random cat from placekitten.com. If the request to placekitten.com gets any error or if you haven't clicked the button, Pao Pao will be the default picture.</p>

			<div className="privacy-button">
				<button id="request-button" onClick={ () => handleFetch() } type="submit">Get me a damn cute kitten!</button>
			</div>

			<div className="privacy-image">
				{isLoading && <i className="fa-solid fa-spinner fa-spin-pulse"></i>}
				{!isLoading && <img id="image" alt="a cat pic we get from placekitten.com" src={currentPic}/>}
			</div>
		</div>
	);
}

export default Privacy;