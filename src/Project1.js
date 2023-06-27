import ButtonFace from "./component/button-face";
import ButtonGmail from "./component/button-gmail";

function Project1() {
  return (
    <div className="app-background">
      <div className="title">
        <div className="auth-title">
          <h1 className="title-content">
            Hàng ngàn cuốn sách
            <br />
            trong tầm tay
          </h1>
        </div>

        <div className="auth-content">
          <div className="auth-contents">
            <div className="register-title">
              <h1 className="register-para">
                Đăng nhập
                <br />
                và khám phá
              </h1>
            </div>

            <div className="facebook-register">
              <ButtonFace />
            </div>

            <div className="gmail-register">
              <ButtonGmail />
            </div>

            <button className="registers">
              Đăng nhập bằng tài khoản BIBOO
            </button>

            <div className="sign-up">
              <p className="sign-up-unknow">Chưa có tài khoản?</p>
              <p className="sign-up-know">
                <span className="register-name">Đăng ký</span>{" "}
                <span className="sign-up-unknow">tài khoản BIBOO</span>
              </p>
            </div>

            <div className="Later">
              <p>Bỏ qua</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project1;
