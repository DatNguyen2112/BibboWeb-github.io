import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorEmail from "./component/erroremail";
import ErrorPass from "./component/errrorpass";
import { toast } from "react-toastify";
import ChooseOption from "./ChooseOption";
import { useNavigate } from "react-router-dom"


function Login() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [ShowErrorMail, setShowErrorMail] = useState(false);
  const [ShowErrorPass, setShowErrorPass] = useState(false);

  console.log(Email, Pass);

  const navigate = useNavigate();

  useEffect(() => {
    const form = {
      username: document.querySelector(".email"),
      password: document.querySelector(".password"),
      submit: document.querySelector(".sign-in"),
    };

    let button = form.submit.addEventListener("click", (e) => {
      e.preventDefault();
      const login = "https://kong.mcbooks.vn/production/kong/users/api/v1/auth";
      
      const user = {
        username: form.username.value,
        password: form.password.value,
      };

      // const userJson = JSON.stringify(user);
      // localStorage.setItem("user", userJson);

      fetch(login, {
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
          toast.success("Đăng nhập thành công");
          navigate("/choose-option");
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Đăng nhập thất bại");
        });
    });
  }, []);

  function handleBlurEmail() {
    if (Email === "") {
      setShowErrorMail(true);
    } else {
      setShowErrorMail(false);
    }
  }

  function handleBlurPass() {
    if (Pass === "") {
      setShowErrorPass(true);
    } else {
      setShowErrorPass(false);
    }
  }

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login-logo">
          <img
            className="logos"
            src="https://biboo.tecinus.vn/static/media/Logo.b253bc96.png"
            alt=""
          />
        </div>
        <div className="login-content">
          <div className="rename">
            <div className="return">
              <i className="fa-solid fa-arrow-left"></i>
              <p className="return-para">Quay lại</p>
            </div>

            <form className="return-content">
              <h1 className="return-title">
                Đăng nhập
                <br />
                tài khoản Bizbooks
              </h1>

              <div className="return-input">
                <div className="return-email">
                  <input
                    value={Email}
                    className={ShowErrorMail ? "border-error-email" : "email"}
                    type="text"
                    placeholder="Email đăng nhập"
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleBlurEmail}
                  />

                  {ShowErrorMail && <ErrorEmail />}
                </div>

                <div className="return-pass-show">
                  <div className="return-pass">
                    <input
                      value={Pass}
                      className={
                        ShowErrorPass ? "border-error-passs" : "password"
                      }
                      type="password"
                      placeholder="Mật khẩu"
                      onChange={(e) => setPass(e.target.value)}
                      onBlur={handleBlurPass}
                    />

                    {ShowErrorPass && <ErrorPass />}
                  </div>

                  <button className="show-pass">
                    <img
                      src="https://biboo.tecinus.vn/static/media/hidden-icon.2033467b.svg"
                      alt=""
                    />
                  </button>
                </div>
              </div>

              <div className="forget-pass">
                <p className="forget-pass-para">Quên mật khẩu?</p>
              </div>

              <div className="sign-in-btn">
                <button className="sign-in">
                  <p className="sign-in-text">Đăng nhập</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
