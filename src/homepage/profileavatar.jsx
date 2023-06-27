function ProfileAvatar() {
    return (
      <div className="profile-avatar">
        <div className="avatar">
          <img
            className="avatar-profile"
            src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/290320264_883017059767086_429143635416264855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LotxoPhSA58AX-ASLL_&_nc_ht=scontent.fhan9-1.fna&oh=00_AT8zfVR9FBbESzBaBE9tbtPk8ziWUJ6lBmCR0HjS-1MMlA&oe=63287169"
            alt=""
          />

          <img
            className="camera-profile"
            src="https://biboo.tecinus.vn/static/media/camera-icon.62e14906.svg"
            alt=""
          />
        </div>

        <div className="account">
          <p className="account-title">Dat Nguyen</p>
          <p className="account-email">datnguyen21122001@gmail.com</p>
        </div>
      </div>
    );
}

export default ProfileAvatar