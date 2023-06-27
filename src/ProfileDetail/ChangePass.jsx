import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpProfilePass from "../popupsuccess/popupprofilepass";
function ChangePass() {
  const [pass, setPass] = useState("ngoc21062001");
  //   console.log(pass)
  const [repass, setRePass] = useState("");
  const [ShowErrorPass, setShowErrorPass] = useState(false);
  const [ShowErrorRePass, setShowErrorRePass] = useState(false);
  const [showpass, setShowPass] = useState(false);
  const [showrepass, setShowRePass] = useState(false);
  const [open, setOpen] = useState(false);
  const handleBlurPass = () => {
    if (pass === "") {
      setShowErrorPass(true);
    } else {
      setShowErrorPass(false);
    }
  };

  const handleBlurRePass = () => {
    if (repass === "") {
      setShowErrorRePass(true);
    } else {
      setShowErrorRePass(false);
    }
  };

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

        <div className="limit-creator">
          <div className="change-pass-contents">
            <div className="changePassTitle">
              <p className="change-pass-title">Đổi mật khẩu</p>
            </div>

            <div>
              <p className="change-pass-para">
                Nhập vào mật khẩu mới khác với mật khẩu trước đây của bạn
              </p>
            </div>

            <div className="lockPhoto">
              <img
                className="lock-img"
                src="https://biboo.tecinus.vn/static/media/change-pass-image.2cc0ca5f.png"
                alt=""
              />
            </div>
          </div>

          <div className="change-pass-form">
            <div className="change-re-pass">
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className={ShowErrorPass ? "error-pass" : "change-inputs"}
                type={showpass ? "password" : "text"}
                name=""
                id=""
                placeholder="Mật khẩu mới"
                onBlur={handleBlurPass}
              />
              {ShowErrorPass && (
                <span
                  style={{
                    position: "absolute",
                    color: "#FF4C4D",
                    fontFamily: "SVN-Gilroy-light",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "20px",
                    letterSpacing: "0.75px",
                    bottom: "0",
                    padding: "5px",
                    marginLeft: "17px",
                    display: "block",
                  }}
                >
                  *Vui lòng điền đầy đủ thông tin
                </span>
              )}
              <button
                onClick={() => setShowPass(true)}
                className={showpass ? "hidden-icons brown-bg" : "hidden-icons"}
              >
                <img
                  src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg"
                  alt=""
                />
              </button>
            </div>

            <div className="change-re-pass">
              <input
                value={repass}
                onChange={(e) => setRePass(e.target.value)}
                className={ShowErrorRePass ? "error-re-pass" : "change-inputs"}
                type={showrepass ? "text" : "password"}
                name=""
                id=""
                placeholder="Nhập lại mật khẩu mới"
                onBlur={handleBlurRePass}
              />
              {ShowErrorRePass && (
                <span
                  style={{
                    position: "absolute",
                    color: "#FF4C4D",
                    fontFamily: "SVN-Gilroy-light",
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "20px",
                    letterSpacing: "0.75px",
                    bottom: "0",
                    padding: "5px",
                    marginLeft: "17px",
                    display: "block",
                  }}
                >
                  *Vui lòng điền đầy đủ thông tin
                </span>
              )}
              <button
                onClick={() => setShowRePass(true)}
                className={showrepass ? "hidden-icons brown-bg" : "hidden-icons"}
              >
                <img
                  src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg"
                  alt=""
                />
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="submit-re-pass">
              Tạo mật khẩu mới
            </button>
            {open && <PopUpProfilePass emailChange={pass} setClose={setOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;
