import React, { useState } from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import SideNav from './components/sidebar/Sidenav';
import User from './components/user/User';
import SideDetails from './components/sidebar/Sidedetails';

function App() {
  const [showSideNav, setShowSideNav] = useState(true);
  const [showUser, setShowUser] = useState(true);
  const [showSideDetails, setShowSideDetails] = useState(false);

  const handleToggleData = (showDetails) => {
    setShowSideNav(!showDetails);
    setShowUser(!showDetails);
    setShowSideDetails(showDetails);
  };

  const handleIconClick = (iconMoved) => {
    setShowSideNav(!iconMoved);
    setShowUser(!iconMoved);
    setShowSideDetails(iconMoved);
  };

  return (
    <div className="App">
      {showSideNav && <SideNav onToggle={handleToggleData} />}
      <Profile toggle={showUser} />
      {showUser && !showSideDetails && <User />} {/* Show User if not in SideDetails */}
      {showSideDetails && <SideDetails onIconClick={handleIconClick} />}
    </div>
  );
}

export default App;
