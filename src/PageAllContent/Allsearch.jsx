
function AllSearch() {
    return (
      <div className="search-book">
        <div className="search-icon">
          <img
            className="search-icon-img"
            src="https://biboo.tecinus.vn/static/media/search-icon.80e59f36.svg"
            alt=""
          />
        </div>

        <div className="search-input">
          <input
            className="search-input-item"
            type="text"
            placeholder="Tìm kiếm sách"
          />
        </div>
      </div>
    );
}

export default AllSearch