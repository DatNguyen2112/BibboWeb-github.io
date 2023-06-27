import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpChange from "../popupsuccess/popupchange";
function ChangeLimit() {
  const [numbers, setNumbers] = useState(30);
  const [open, setOpen] = useState(false)
  // console.log(prev)
  const handlePrev = () => {
    setNumbers(numbers - 5);
  };

  const handlePlus = () => {
    setNumbers(numbers + 5);
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
          <img
            className="limit-img"
            src="https://biboo.tecinus.vn/static/media/setup-target.30b483fd.png"
            alt=""
          />

          <div className="limit-content">
            <div className="limit-titles">
              <p className="limit-title">Thiết lập mục tiêu đọc sách</p>
            </div>

            <p className="limit-para">
              Hãy tìm cuốn sách hay, đặt ra mục tiêu và hình thành thói quen đọc
              sách hàng ngày.
            </p>

            <div className="limit-prev-and-plus">
              <button onClick={handlePrev} className="limit-prev">
                -
              </button>
              <div className="limit-number">{numbers}</div>
              <button onClick={handlePlus} className="limit-plus">
                +
              </button>
            </div>

            <div className="limit-btn">
              <button onClick={() => setOpen(!open)} className="limit-submit">Thiết lập mục tiêu mới</button>

              {open && <PopUpChange pageNumber={numbers} setClose={setOpen}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeLimit;
