import { Link } from "react-router-dom";
function ChooseOption() {
  return (
    <Link to={"/choose-option"} className="choose-option">
      <div className="choose-option-img">
        <div className="choose-option-content">
          <h1 className="choose-option-title">Chọn chủ đề</h1>
          <p className="choose-option-para">
            Hãy lựa chọn ít nhất 03 chủ đề mà bạn quan tâm
          </p>
        </div>

        <div className="choose-option-photo">
          <img
            className="choose-option-photos"
            src="https://biboo.tecinus.vn/static/media/Group.36ab6d0b.png"
            alt=""
          />
        </div>
      </div>
      <div className="choose-option-form">
        <div className="choose-option-content">
          <div className="choose-option-search">
            <div className="choose-option-search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <input
              className="choose-search-input"
              placeholder="Tìm kiếm chủ đề"
            />
          </div>

          <div className="choose-option-favor">
            <div className="choose-option-favor-item">
              <img
                className="choose-favor-photos"
                src="https://file.mentor.vn/files/categories/file-1635303007491.png"
                alt=""
              />
              <span className="choose-option-paras">
                Tủ sách Nguyễn Hiến Lê
              </span>
            </div>
            <div className="choose-option-favor-item">
              <img
                className="choose-favor-photos"
                src="https://file.mentor.vn/files/categories/file-1635303025626.png"
                alt=""
              />
              <span className="choose-option-paras">Sức khỏe</span>
            </div>
            <div className="choose-option-favor-item">
              <img
                className="choose-favor-photos"
                src="https://file.mentor.vn/files/categories/file-1635303034252.png"
                alt=""
              />
              <span className="choose-option-paras">Tài chính</span>
            </div>
            <div className="choose-option-favor-item">
              <img
                className="choose-favor-photos"
                src="https://file.mentor.vn/files/categories/file-1635303041264.png"
                alt=""
              />
              <span className="choose-option-paras">Tình yêu - hạnh phúc</span>
            </div>
            <div className="choose-option-favor-item">
              <img
                className="choose-favor-photos"
                src="https://file.mentor.vn/files/categories/file-1635303059290.png"
                alt=""
              />
              <span className="choose-option-paras">Doanh nghiệp</span>
            </div>
            <div className="choose-option-favor-item">
              <img
                className="choose-favor-photos"
                src="https://file.mentor.vn/files/categories/file-1635303072744.png"
                alt=""
              />
              <span className="choose-option-paras">Doanh nhân</span>
            </div>
            <div className="choose-option-favor-item">
              <img
                className="choose-favor-photos"
                src="https://file.mentor.vn/files/categories/file-1635303088718.png"
                alt=""
              />
              <span className="choose-option-paras">Sách Kỹ Năng</span>
            </div>
          </div>

          <div className="choose-option-submit">
            <button className="choose-option-btn">Tiếp tục</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChooseOption;
