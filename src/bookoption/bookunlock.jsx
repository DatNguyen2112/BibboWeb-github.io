import LibraryProgress from "../Bookunlock/LibraryProgress";
import LibrarySearch from "../Bookunlock/LibrarySearch";

function BookUnlock() {
  return (
    <div>
      <LibrarySearch />
      <LibraryProgress />
      
      <div className="empty-book">
        <h2 className="empty-para">Chưa có cuốn sách nào</h2>
      </div>
    </div>
  );
}

export default BookUnlock;
