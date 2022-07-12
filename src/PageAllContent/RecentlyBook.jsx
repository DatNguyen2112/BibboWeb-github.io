import { ProgressBars } from "../component/progressbars";

function RecentlyBook() {
    return (
      <div className="recently-item">
        <div className="recently-img">
          <img
            className="recently-photo"
            src="https://file.mentor.vn/files/books/file-1637723174505.png"
            alt=""
          />
        </div>

        <div className="recently-content">
          <div className="recently-span">
            <p className="recently-para">Đang xem gần đây</p>
          </div>

          <div className="recently-title">
            <h2>
              Barack Obama và sự nghiệp The Audacie of the Legend of all the
              time
            </h2>
          </div>

          <p className="recently-author">Barack Obama</p>

          <div className="recently-progressbar">
            <div className="progressbar-row">
              <ProgressBars />
              <small className="progressbar-percent">0%</small>
            </div>
          </div>

          <div className="recently-continute">
            <button className="recently-btn">Tiếp tục đọc</button>
          </div>
        </div>
      </div>
    );
}

export default RecentlyBook