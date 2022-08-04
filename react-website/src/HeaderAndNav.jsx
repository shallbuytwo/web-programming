import './HeaderAndNav.css';
import logo from './pic/logo.png';

function HeaderAndNav({itemKeys, curActive, setActive, currentUser}) {
	return (
		<header className="header-and-nav">
			<a className="skip-link" href="#main">Skip to content</a>

			<div id="header">
				<img id="logo" alt="Pao Pao as a logo" src={logo}/>
				<div id="header-text">
					<h1>My Grumpy Cat - Pao Pao</h1>
					<h2>She Won't Stop Judging</h2>
					<h3>
						{!currentUser && "Not Logged In"}
						{currentUser && `Logged In As: ${currentUser}`}
					</h3>
				</div>
			</div>

			<nav className="nav">
				<button className="nav-marker" type="button">Navigation</button>
				<ul className="nav-items">
					{itemKeys.map( item => {
						return (
							<li key={item} onClick={ () => setActive(item) } className={`nav-item ${curActive === item ? `nav-item-active` : ``}`}>
								<button>{item}</button>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

export default HeaderAndNav;