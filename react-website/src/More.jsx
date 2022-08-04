import { useState } from 'react';
import './More.css';

function More() {
	// Tab entries
	const entries = {
	  'Who' : 'Pao Pao is a cat. Pao Pao is a cat. Pao Pao is a cat. Pao Pao is a cat. Pao Pao is a cat. Pao Pao is a cat.',
	  'What' : 'Pao Pao is a tri-color British shorthair cat. Pao Pao is a tri-color British shorthair cat. Pao Pao is a tri-color British shorthair cat. ',
	  'Why' : 'Pao Pao wants to know what you meant by asking why. Pao Pao wants to know what you meant by asking why.',
	  'Where' : "Pao Pao lives in Seattle. Pao Pao lives in Seattle. Pao Pao lives in Seattle. Pao Pao lives in Seattle. Pao Pao lives in Seattle.",
	  'When' : "Pao Pao lives in Seattle since 2019. Pao Pao lives in Seattle since 2019. Pao Pao lives in Seattle since 2019. Pao Pao lives in Seattle since 2019.",
	};

	// By default we will open the first tab.
	const [currentEntry, setCurrentEntry] = useState(Object.keys(entries)[0]);

	return (
		<div className="more">
			<div className="tabs">
				<div className="tabs-header">
				{ Object.keys(entries).map( title => {
					const isOpen = currentEntry === title;
					return (
						<button key={title} className={`tabs-header-button ${isOpen ? 'tabs-header-button-open' : ''}`} onClick={ () => setCurrentEntry(title) }>{title}</button>
					);
				})}
				</div>
				<div className="tabs-content">
					{entries[currentEntry]}
				</div>
			</div>
		</div>
	);
}

export default More;