import AlertIcon from "../component/alerticon";
import OnlineIcon from "../component/onlineicon";
import ShopIcon from "../component/shopicon";
import PopUpHover from "./popuphover";

function SideBarIcon() {
    return (
      <div className="suggest-icons">
        <div className="shop-icon">
          <ShopIcon />
        </div>

        <div className="avatar-online">
          <div className="alert-icon">
            <AlertIcon />
          </div>
          <div className="online-icon">
            <OnlineIcon />
          </div>
        </div>

        <div className="avatar-icon">
          <img
            className="avatar-img"
            src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/290320264_883017059767086_429143635416264855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LotxoPhSA58AX-ASLL_&_nc_ht=scontent.fhan9-1.fna&oh=00_AT8zfVR9FBbESzBaBE9tbtPk8ziWUJ6lBmCR0HjS-1MMlA&oe=63287169"
            alt=""
          />

          <PopUpHover />
        </div>
      </div>
    );
}

export default SideBarIcon