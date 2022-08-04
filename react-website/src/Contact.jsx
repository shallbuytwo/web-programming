import { useState, Fragment } from 'react';
import './Contact.css';

function Contact({signedUpList, appendToSignedUpList}) {
	// Items in the form.
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [wantAReply, setWantAReply] = useState(true);
	const [howMuchLike, setHowMuchLike] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const newList = [name, email, wantAReply, howMuchLike];
		appendToSignedUpList(newList);
	};

	return (
		<div className="contact">
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-text">
					<label>Thank you for your interest in Pao Pao!</label>
          			<label>Please note, however, that Pao Pao may not be interested in you.</label>
          			<label>A field is required if it is marked with an asterisk (*).</label>
				</div>
				<label><span className="required">Name:</span><input type="name" value={name} onChange={ (e) => setName(e.target.value) } required/></label>
				<label><span className="required">Email:</span><input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } required/></label>
				<label><span>Do you want Pao Pao to consider replying you?</span><input type="checkbox" checked={wantAReply} onChange={ (e) => setWantAReply(e.target.checked) }/></label>
				<label><span className="required">Please select how much you like Pao Pao:</span>
		          <select name="tier" value={howMuchLike} onChange={ (e) => setHowMuchLike(e.target.value) } required>
		            <option value="">Please select</option>
		            <option value="Like">Like</option>
		            <option value="Really Like">Really Like</option>
		            <option value="Super Like">Super Like</option>
		          </select>
		        </label>
		        <div className="form-button-div">
          			<button type="submit">Submit</button>
        		</div>			
			</form>

			<div className="wholelist">
				<div className="wholelist-title">People who have signed up:</div>
				<div className="wholelist-name">Name</div>
				<div className="wholelist-email">Email</div>
				<div className="wholelist-wantareply">Want A Reply</div>
				<div className="wholelist-howmuchlike">How Much Like</div>
				{signedUpList.map( (element, index) => {
					return (
						<Fragment key={index}>
							<div key={`${index} name`} className="name">{element[0]}</div>
							<div key={`${index} email`} className="email">{element[1]}</div>
							<div key={`${index} wantareply`} className="wantareply">{`${element[2] ? "Yes" : "No"}`}</div>
							<div key={`${index} howmuchlike`} className="howmuchlike">{element[3]}</div>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
}

export default Contact;