import { useState } from 'react';
import HeaderAndNav from './HeaderAndNav';
import About from './About';
import More from './More';
import User from './User';
import Contact from './Contact';
import Privacy from './Privacy';
import './App.css';

function App() {
  // Stored contents for the contact form
  const [signedUpList, setSignedUpList] = useState([]);

  function appendToSignedUpList(newList) {
    const newSignedUplist = [...signedUpList];
    newSignedUplist.push(newList);
    setSignedUpList(newSignedUplist);
  }

  // Who is current user?
  const [currentUser, setCurrentUser] = useState("");

  // Items in the navigation bar and their components.
  const navItems = {
    'About': <About />,
    'More about Pao Pao': <More />,
    'User Management': <User currentUser={currentUser} setCurrentUser={setCurrentUser}/>,
    'Contact Pao Pao': <Contact signedUpList={signedUpList} appendToSignedUpList={appendToSignedUpList}/>,
    'Privacy': <Privacy />
  }
  // Current active item.
  const [curActive, setActive] = useState(Object.keys(navItems)[0])

  return (
    <div className="app">
      <HeaderAndNav itemKeys={Object.keys(navItems)} curActive={curActive} setActive={setActive} currentUser={currentUser}/>

      <main id="main" className="app-main">
        {navItems[curActive]}
      </main>

      <footer className="footer">
        <div className="footer-text">
          All rights reserved to Pao Pao, 2017 - Present
        </div>
      </footer>
    </div>
  );
}

export default App;
