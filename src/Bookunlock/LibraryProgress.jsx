import { ProgressBar } from "../component/progressbar";
import LibraryContents from "../LibraryProgress/LibraryContents";
import LibraryCount from "../LibraryProgress/LibraryCount";

function LibraryProgress() {
    return (
      <div className="library-progress">
        <div className="library-progresses">
          <ProgressBar />
          <LibraryCount />
        </div>

       <LibraryContents />
      </div>
    );
}
export default LibraryProgress