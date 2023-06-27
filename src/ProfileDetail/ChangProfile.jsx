import { Link } from "react-router-dom";
import EditIcon from "../component/editicon";
import DatePicker from 'react-datepicker'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
function ChangeProfile() {
  const [text, setText] = useState(false)
  const [user, setUser] = useState('Dat Nguyen')
  const [email, setEmail] = useState('datnguyen21122001@gmail.com')
  const [phone, setPhone] = useState('')
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="homes">
      <div className="homes-content">
        <Link className="backs" to="/Profile">
          <img
            className="back-link"
            src="https://biboo.tecinus.vn/static/media/back-arrow.c15f502f.svg"
            alt=""
          />
        </Link>

        <div className="limit-creator no-flex">
          <div className="change-profile-title">
            Chỉnh sửa thông tin cá nhân
          </div>
          <div className="change-profile-form">
            <form action="">
              <div className="Username">
                <div className="usename-group">
                  <div className="username-title">
                    <label htmlFor="">Họ và tên</label>
                  </div>

                  <input
                    className="username-input"
                    disabled={text ? false : true}
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>

                <div onClick={() => setText(!text)} className="edit-data">
                  <EditIcon />
                </div>
              </div>

              <div className="border-bottom-black"></div>

              <div className="Date">
                <div className="usename-group">
                  <div className="username-title">
                    <label htmlFor="">Ngày sinh</label>
                  </div>

                  <DatePicker
                    className="username-input"
                    disabled={text ? false : true}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                </div>

                <div onClick={() => setText(!text)} className="edit-data">
                  <EditIcon />
                </div>
              </div>

              <div className="border-bottom-black"></div>

              <div className="Email">
                <div className="usename-group">
                  <div className="username-title">
                    <label htmlFor="">Email</label>
                  </div>

                  <input
                    className="username-input"
                    disabled={text ? false : true}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div onClick={() => setText(!text)} className="edit-data">
                  <EditIcon />
                </div>
              </div>

              <div className="border-bottom-black"></div>

              <div className="Phone">
                <div className="usename-group">
                  <div className="username-title">
                    <label htmlFor="">Phone</label>
                  </div>

                  <input
                    className="username-input"
                    disabled={text ? false : true}
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div onClick={() => setText(!text)} className="edit-data">
                  <EditIcon />
                </div>
              </div>

              <div className="border-bottom-black"></div>
            </form>

            <div className="save-submit">
              <button className="submit-btn">Lưu thay đổi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeProfile;
