import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import { useState } from "react";
function Support() {
  const [open, setOpen] = useState(false);

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

        <div className="limit-creator-no-flex">
          <div className="support-title">
            <p>Hỗ trợ</p>
          </div>

          <div className="support-option">
            <div className="support-item">
              <Button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="example-collapse-text"
                className="support-btn"
              >
                <div className="img-and-para">
                  <img
                    className="support-img"
                    src="https://biboo.tecinus.vn/static/media/people-team-icon.654183ee.svg"
                    alt=""
                  />

                  <p className="support-para">Cộng đông sách BIBOO</p>
                </div>
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <div className="collapse-texts">
                    <div className="support-texts-item">
                      <p>Tự xuất bản - Mạnh Tuân</p>
                      <div className="right-icon">
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>

                    <div className="support-texts-border"></div>

                    <div className="support-texts-item">
                      <p>Cộng đồng những người yêu sách BIBOO</p>
                      <div className="right-icon">
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>

            <div className="support-item">
              <Button className="support-btn">
                <div className="img-and-para">
                  <img
                    className="support-img"
                    src="https://biboo.tecinus.vn/static/media/facebook-messenger-icon.96313754.svg"
                    alt=""
                  />

                  <p className="support-para">Gửi tin nhắn qua Messenger</p>
                </div>
              </Button>
            </div>

            <div className="support-item">
              <Button className="support-btn">
                <div className="img-and-para">
                  <img
                    className="support-img"
                    src="https://biboo.tecinus.vn/static/media/round-email-icon.5daed7c5.svg"
                    alt=""
                  />

                  <p className="support-para">Phản hồi qua Email</p>
                </div>
              </Button>
            </div>

            <div className="support-item">
              <Button className="support-btn">
                <div className="img-and-para">
                  <img
                    className="support-img"
                    src="https://biboo.tecinus.vn/static/media/chat-bubbles-question.d8d7a6ec.svg"
                    alt=""
                  />

                  <p className="support-para">FAQ câu hỏi thường gặp</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
