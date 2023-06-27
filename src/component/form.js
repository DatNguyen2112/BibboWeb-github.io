
import { useState, useEffect } from 'react'
import PopUpCreatePass from '../popupsuccess/popupcreatepass'
import { toast } from "react-toastify";
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom"
function Form() {
    const [openCreate, setOpenCreate] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [repass, setRePass] = useState('')
    const [showError, setShowError] = useState(false)
    const [showErrorName, setShowErrorName] = useState(false)
    const [showErrorPass, setShowErrorPass] = useState(false)
    const [showErrorRePass, setShowErrorRePass] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
      const form = {
        email: document.querySelector('.email-input'),
        fullname: document.querySelector('.name-input'),
        password: document.querySelector('.pass-input'),
        password_confirm: document.querySelector('.re-pass-input'),
        submit: document.querySelector('.form-submit-btn')
      };

      let button = form.submit.addEventListener("click", (e) => {
        e.preventDefault();
        const register =
          "https://kong.mcbooks.vn/production/kong/users/api/v1/users/register";
         

        const user = {
          email: form.email.value,
          fullname: form.fullname.value,
          password: form.password.value,
          password_confirm: form.password_confirm.value,
        };

        const userJson = JSON.stringify(user);
        localStorage.setItem("user", userJson);

        fetch(register, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(user),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Something went wrong");
          })
          .then((data) => {
            console.log("Success", data);
            toast.success(
              "Đăng ký thành công"
            );
            navigate('/sign-in')
          })
          .catch((error) => {
            console.error("Error:", error);
            toast.error("User exists with same username");
          });
      });
    }, []);
    const handleBlurEmail =  () => {
        if(email === "") {
            setShowError(true)
        }else {
            setShowError(false)
        }
    }

    const handleBlurName =  () => {
        if(name === "") {
            setShowErrorName(true)
        }else {
            setShowErrorName(false)
        }
    }

    const handleBlurPass =  () => {
        if(pass === "") {
            setShowErrorPass(true)
        }else {
            setShowErrorPass(false)
        }
    }

    const handleBlurRePass =  () => {
        if(repass === "") {
            setShowErrorRePass(true)
        }else {
            setShowErrorRePass(false)
        }
    }
    
    
    return (
      <div className="form">
        <form className="form-validation" action="">
          <h2 className="form-title">Tạo tài khoản</h2>
          <div className="form-input">
            <input
              value={email}
              className={showError ? "border-error" : "email-input"}
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlurEmail}
            />
            {showError && (
              <span
                style={{
                  display: "block",
                  position: "absolute",
                  left: "0",
                  bottom: "0",
                  fontSize: "13px",
                  color: "red",
                  fontFamily: "SVN-Gilroy-light",
                }}
              >
                *Vui lòng nhập email
              </span>
            )}
          </div>
          <div className="form-input">
            <input
              value={name}
              className={showErrorName ? "border-error" : "name-input"}
              type="text"
              placeholder="Họ và tên"
              onChange={(e) => setName(e.target.value)}
              onBlur={handleBlurName}
            />
            {showErrorName && (
              <small
                style={{
                  display: "block",
                  position: "absolute",
                  left: "0",
                  bottom: "0",
                  fontSize: "13px",
                  color: "red",
                  fontFamily: "SVN-Gilroy-light",
                }}
              >
                *Vui lòng nhập họ tên
              </small>
            )}
          </div>
          <div className="form-password">
            <div className="form-input-password">
              <input
                value={pass}
                className={showErrorPass ? "border-error-pass" : "pass-input"}
                type="password"
                placeholder="Mật khẩu"
                onChange={(e) => setPass(e.target.value)}
                onBlur={handleBlurPass}
              />

              {showErrorPass && (
                <small
                  style={{
                    display: "block",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    fontSize: "13px",
                    color: "red",
                    fontFamily: "SVN-Gilroy-light",
                  }}
                >
                  *Vui lòng nhập mật khẩu
                </small>
              )}

              <button className="form-input-show">
                <img
                  src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="form-password">
            <div className="form-input-password">
              <input
                value={repass}
                className={
                  showErrorRePass ? "border-error-re-pass" : "re-pass-input"
                }
                type="password"
                placeholder="Nhập lại mật khẩu"
                onChange={(e) => setRePass(e.target.value)}
                onBlur={handleBlurRePass}
              />

              {showErrorRePass && (
                <small
                  style={{
                    display: "block",
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    fontSize: "13px",
                    color: "red",
                    fontFamily: "SVN-Gilroy-light",
                  }}
                >
                  *Vui lòng nhập lại mật khẩu
                </small>
              )}

              <button className="form-input-show blue">
                <img
                  src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div onClick={() => setOpenCreate(!openCreate)} className="form-submit">
            <div className="form-submit-btn">Tạo tài khoản</div>
            {/* {openCreate && <PopUpCreatePass setClosePass={setOpenCreate} valus={email}/>} */}
          </div>
        </form>
        <div className="option">
          <p className="option-para">
            Đã có tài khoản? <Link to="/sign-in" className="signin">Đăng nhập</Link>
          </p>
        </div>
      </div>
    );
}

export default Form;