function PopUpChange({ pageNumber, setClose }) {
  return (
    <div className="modalBackground">
      <div className="modalContent">
        <div className="modalContents">
          <div className="modals">
            <div className="modalBtns">
              <span onClick={() => setClose(false)} className="modalClose">X</span>
            </div>

            <div className="modalForm">
              <div className="modalTitle">
                <h1 className="modalPara">
                  Đã thiết lập
                  <br />
                  mục tiêu
                </h1>
              </div>

              <div className="modalContent">
                <div className="modalIcon">
                  <i className="fa-solid fa-circle-check"></i>
                </div>

                <small className="modalAccount">
                  Số trang sách đọc hàng ngày
                  <br />
                  <span className="modalAccoutTile">"{pageNumber} trang"</span>
                </small>
              </div>

              <div className="modalSubmit">
                <button onClick={() => setClose(false)} className="modalBtn">Xác nhận</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpChange;
