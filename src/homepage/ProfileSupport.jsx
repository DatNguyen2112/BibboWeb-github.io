import { Link } from 'react-router-dom'


function ProfileSupport() {
  return (
    <div className="profile-support">
      <ul>
        <li className="profile-sup-option">
            <Link className='profile-link' to='/Profile/support'>Hỗ trợ</Link>
        </li>
        <li className="profile-sup-option">
            <Link className='profile-link' to='/Profile/legal-introdution'>Pháp lý và giới thiệu</Link>
        </li>
        <li className="profile-sup-option">
            <Link className='profile-link' to='/Profile/provider-info'>Thông tin nhà phát triển</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSupport;
