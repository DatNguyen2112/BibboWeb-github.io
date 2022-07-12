function BookCare() {
    return (
      <div>
        <div className="library-search visible">
          <div className="library-input">
            <input className="inputs" placeholder="Tìm kiếm sách" type="text" />
          </div>

          <div className="library-search-icon">
            <img
              className="libray-search-logo"
              src="https://biboo.tecinus.vn/static/media/search-icon.80e59f36.svg"
              alt=""
            />
          </div>
        </div>

        <div className="empty-book width800">
          <h2 className="empty-para">Chưa có cuốn sách nào</h2>
        </div>
      </div>
    );
}

export default BookCare