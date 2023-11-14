import React,{useState} from 'react'
import './Sidedetails.css'
const Sidedetails = ({ onIconClick }) => {
  const [iconPosition, setIconPosition] = useState('normal');

  const handleIconClick = () => {
    const newPosition = iconPosition === 'normal' ? 'moved' : 'normal';
    setIconPosition(newPosition);
    onIconClick(newPosition === 'moved'); // Trigger the parent callback to handle the icon click
  };
  return (
    <div className="nav-bar">
        <div className="nav-bar-child" />
        <div className="frame-parent">
          <div className="frame-group">
            <div className="icon-profile-circle-parent">
              <img
                className="icon-profile-circle"
                alt=""
                src="/-icon-profile-circle.svg"
              />
              <div className="my-profile">My Profile</div>
            </div>
            <div className="vector-parent">
              <img className="group-child" alt="" src="/rectangle-445.svg" />
              <div className="logout-parent">
                <div className="logout">Logout</div>
                <img
                  className="icon-logout-1"
                  alt=""
                  src="/-icon-logout-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="setting">{`Setting `}</div>
        </div>
        <div className="referal-box">
          <div className="referal-box-child" />
          <div className="reward-point">
            <div className="reward-point-child" />
            <div className="div">500</div>
            <img className="vector-icon" alt="" src="/vector.svg" />
          </div>
          <div className="get-free-points">Get Free Points !!</div>
        </div>
        <div className="chevron-circle-left-undefine" />
        <div className="home">
          <div className="frame-container">
            <div className="frame-div">
              <div className="icon-profile-add-wrapper">
                <div className="icon-profile-add">
                  <img className="group-icon" alt="" src="/group.svg" />
                </div>
              </div>
              <div className="add-students">Add Students</div>
            </div>
            <div className="vector-group">
              <img className="frame-child" alt="" src="/rectangle-588.svg" />
              <div className="group-wrapper">
                <div className="icon-home-parent">
                  <img className="icon-home" alt="" src="/-icon-home.svg" />
                  <div className="home1">Home</div>
                </div>
              </div>
              <img className="frame-item" alt="" src="/rectangle-591.svg" />
            </div>
          </div>
          <div className="dashboard">Dashboard</div>
        </div>
        <img
        className={`icon-add ${iconPosition}`}
        alt=""
        src="/-icon-add.svg"
        onClick={handleIconClick}
      />
      </div>
  )
}

export default Sidedetails