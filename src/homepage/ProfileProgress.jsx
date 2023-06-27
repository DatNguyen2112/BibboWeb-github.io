import { ProgressBars } from "../component/progressbars";
import {Link} from 'react-router-dom'
function ProfileProgress() {
  return (
    <div className="profile-progress">
      <div className="profile-progress-content">
        <div className="title-and-para">
          <p className="progress-content-title">Mục tiêu đọc sách</p>
          <p className="progress-content-para">
            Trang sách bạn đã đọc trong ngày hôm nay
          </p>
          <button className="profile-btn">
            <Link className="profile-btns" to="/Profile/setup-target">
              Thay đổi mục tiêu
            </Link>
          </button>
        </div>

        <div className="progressbar-profile">
          <ProgressBars />
          <strong className="progress-profile-count">0/50</strong>
        </div>
      </div>
    </div>
  );
}

export default ProfileProgress;
