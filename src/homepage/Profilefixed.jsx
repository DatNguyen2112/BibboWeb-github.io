
import { Link } from 'react-router-dom'
function ProfileFixed() {
    return (
      <button className="profile-fixed">
        <div className="fix">
          <img
            className="fixed-logo"
            src="https://biboo.tecinus.vn/static/media/edit-square-icon.87db9f0a.svg"
            alt=""
          />

          <Link to='/Profile/update-info'  className="fixed-para">Chỉnh sửa thông tin cá nhân</Link>
        </div>

        <img
          className="fixed-right"
          src="https://biboo.tecinus.vn/static/media/arrow-right-icon.d6e53418.svg"
          alt=""
        />
      </button>
    );
}

export default ProfileFixed