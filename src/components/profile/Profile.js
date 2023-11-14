import "./Profile.css";
import Welcome from './name';
import Wrap from './wrap'
import UserJourney from './userJourney'
function Profile(props) {
    return (
        <div class={props.toggle ? "profile" : "profile profilefull"}>
            <div id='header'>
                <img src='/rablo.png' alt="logo" class="logo" />
                <p id='date'>Monday , 3 Oct,  12:13 PM </p>
                <div class="wallet">
                    <img src='/icon_wallet.svg' alt="wallet" />
                    <h1>500</h1>
                </div>
                <div class="line"></div>
                <img src='/Message.png' alt="message" class="message" />
                <img src='/icon_notification.svg' alt="bell" />
            </div>

            <Welcome/>
            <Wrap/>
            <UserJourney/>





              







      </div>
    );
}
export default Profile;