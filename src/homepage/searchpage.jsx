import AllSearch from "../PageAllContent/Allsearch";
import ListBooks from "../PagePresent/ListBook";

function SearchPage() {
  return (
    <div className="homes">
      <div className="homes-content">
        <p className="search-title">Tìm kiếm</p>

        <AllSearch />

        <p className="search-result">Kết quả tìm kiếm</p>

        <ListBooks />
      </div>
    </div>
  );
}

export default SearchPage;
