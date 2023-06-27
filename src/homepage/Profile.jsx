import ProfileAvatar from "./profileavatar";
import ProfileFixed from "./Profilefixed";
import ProfileProgress from "./ProfileProgress";
import ProfileOption from "./ProfileOption";
import ProfileSupport from "./ProfileSupport";
import ProfileLogOut from "./ProfileLogOut";

function ProfilePage() {
  return (
    <div className="homes">
      <div className="homes-content">
        <p className="search-title">Thông tin cá nhân</p>

        <div className="profile-content">
          <img
            className="profile-bg"
            src="https://biboo.tecinus.vn/static/media/profile-image.f82e13b0.png"
            alt=""
          />

          <div className="profile-contents">
            <div className="profile-detail">
              <div className="Avatar-and-progress">
                <ProfileAvatar />
                <ProfileProgress />
              </div>

              <div className="profile-option">
                <ProfileFixed />

                <div className="profile-options">
                  <ProfileOption />
                  <ProfileSupport />
                </div>

                <div className="profile-log-out">
                  <ProfileLogOut />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
