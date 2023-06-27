import { Link } from "react-router-dom";
import PopUpLogOut from "./PopUpLogOut";

function PopUpHover() {
  return (
    <div className="pop-up-hover">
      <div className="pop-up-account">
        <img
          className="avatar-img"
          src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/290320264_883017059767086_429143635416264855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LotxoPhSA58AX-ASLL_&_nc_ht=scontent.fhan9-1.fna&oh=00_AT8zfVR9FBbESzBaBE9tbtPk8ziWUJ6lBmCR0HjS-1MMlA&oe=63287169"
          alt=""
        />

        <div className="pop-up-name-and-email">
          <div className="pop-up-name">Dat Nguyen</div>
          <div className="pop-up-email">datnguyen21122001@gmail.com</div>
        </div>
      </div>

      <div className="popup-bottom"></div>

      <div className="profiles">
        <div className="pop-up-profile">
          <img
            className="profile-img"
            src="https://biboo.tecinus.vn/static/media/profile-icon.a1ffa079.svg"
            alt=""
          />

          <Link className="profile-person" to="/Profile">
            Thông tin cá nhân
          </Link>
        </div>

        <div className="pop-up-profile">
          <img
            className="profile-img"
            src="https://biboo.tecinus.vn/static/media/target-read-book-icon.e961aa36.svg"
            alt=""
          />

          <Link className="profile-person" to="/Profile">
            Mục tiêu đọc sách
          </Link>
        </div>
      </div>

      <div className="popup-bottom"></div>

      <PopUpLogOut />
    </div>
  );
}

export default PopUpHover;
