function LibrarySearch() {
    return (
      <div className="library-search">
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
    );
}

export default LibrarySearch