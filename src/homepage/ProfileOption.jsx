import { AlertProfile } from "../component/alertprofile";
import { ListShopIcon } from "../component/listshopicon";
import { FriendIcon } from "../component/friendicon";
import { UnlockIcon } from "../component/unlockicon";
import { Link } from "react-router-dom";

function ProfileOption() {
  return (
    <ul>
      <li className="profile-options-detail">
        <AlertProfile />
        <div className="profile-options-item">
          <Link to="/Profile/notification" className="item-para">
            Thông báo
          </Link>

          <Link to="/Profile/notification">
            <img
              className="item-right"
              src="https://biboo.tecinus.vn/static/media/arrow-right-icon.d6e53418.svg"
              alt=""
            />
          </Link>
        </div>
      </li>
      <li className="profile-options-detail">
        <ListShopIcon />
        <div className="profile-options-item">
          <Link to="/Profile/order" className="item-para">
            Tất cả đơn hàng
          </Link>

          <Link to="/Profile/order">
            <img
              className="item-right"
              src="https://biboo.tecinus.vn/static/media/arrow-right-icon.d6e53418.svg"
              alt=""
            />
          </Link>
        </div>
      </li>
      <li className="profile-options-detail">
        <FriendIcon />
        <div className="profile-options-item">
          <span className="item-para">Mời bạn bè</span>
          <img
            className="item-right"
            src="https://biboo.tecinus.vn/static/media/arrow-right-icon.d6e53418.svg"
            alt=""
          />
        </div>
      </li>
      <li className="profile-options-detail">
        <UnlockIcon />
        <div className="profile-options-item">
          <Link to="/Profile/change-password" className="item-para">
            Đổi mật khẩu
          </Link>

          <Link to="/Profile/change-password">
            <img
              className="item-right"
              src="https://biboo.tecinus.vn/static/media/arrow-right-icon.d6e53418.svg"
              alt=""
            />
          </Link>
        </div>
      </li>
    </ul>
  );
}

export default ProfileOption;
