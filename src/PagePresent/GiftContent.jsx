import SendIcon from "../component/sendicon";

function GiftContent() {
  return (
    <div className="gift-content">
      <div className="gift-code">
        <img
          className="gift-photos"
          src="https://biboo.tecinus.vn/static/media/gift-img.adbc671a.png"
          alt=""
        />

        <div className="presents">
          <div className="gift-contents">
            <h2 className="gift-title">Mã quà tặng</h2>
            <p className="gift-para">Mở khóa sách để nhận quà</p>
          </div>

          <div className="gift-codes">
            <div className="gift-input">
              <input
                className="gifts-input"
                type="text"
                placeholder="Nhập mã quà tặng"
              />
            </div>

            <button className="gift-send">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="gift-icon">
        <img
          className="pre-icons"
          src="https://biboo.tecinus.vn/static/media/gift-img-box.35915c92.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default GiftContent;
