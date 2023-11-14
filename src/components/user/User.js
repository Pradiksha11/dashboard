import "./User.css";

function User() {
    return (
    <div class="User">
        <div class="box">
        <div className="group-item" />
        <img className="icon-verify" alt="" src="/v5.svg" />
        <img className="greater" alt="" src="/User_arrow.svg" />
        <div className="profile-picture-parent">
          <img
            className="profile-picture-icon"
            alt=""
            src="/profile-picture.svg"
          />
          <div className="rectangle-group">
            <div className="group-inner" />
            <div className="next-parent">
              <div className="next">Create Plan</div>
              <img className="icon-add" alt="" src="/-icon-add.svg" />
            </div>
          </div>
          <div className="location">
            <div className="location-child">Lucknow, Uttar Pradesh</div>
            <div className="john-pope">John Pope</div>
          </div>
        </div>
    </div>
</div>

   

    
    );
}
export default User;