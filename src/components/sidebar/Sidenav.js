
import './Sidenav.css';
import { useState } from 'react';

function SideNav(props) {
  const [showSideDetails, setShowSideDetails] = useState(false);

  const handleToggle = () => {
    setShowSideDetails(true);
    props.onToggle(false); // Hide User component
  };

    return (
      
        <div class="sidenavbar">
          
            <div className="side-bar-child" />
            <img className="icon-menu" alt="" src="/menu.png" onClick={handleToggle} />
            {showSideDetails && props.onToggle(true)} {/* Show SideDetails */}
            <div class="side-profile">
                <div className="symbolsperson-add">
                    <img className="home-icon" alt="" src="/home.png"  />
                    <div className="person-add">
                    <img className="icon-profile-add" alt="" src="/profile-add.png"/>
                </div>
            </div>
        </div>
            <div className="frame-parent">
          <div className="profile-wrapper">
            <img
              className="profile-circle"
              alt="profileimg"
              src="/profile-circle.png"
            />
          </div>
          <div className="logout-wrapper">
            <img
              className="profile-circle"
              alt=""
              src="/logout.png"
            />
          </div>
        </div>
        </div>
    );
}

export default SideNav;