import AlertIcon from "../component/alerticon";
import OnlineIcon from "../component/onlineicon";
import ShopIcon from "../component/shopicon";

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
            src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/290320264_883017059767086_429143635416264855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LzgdU-f-o8YAX_J9boC&_nc_ht=scontent.fhan3-2.fna&oh=00_AT-Xa7sbm6KAgl4nENLpiE5B9_6w03eOOPTX-Jd4ZliW8A&oe=62CD79E9"
            alt=""
          />
        </div>
      </div>
    );
}

export default SideBarIcon