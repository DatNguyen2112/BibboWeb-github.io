import { ProgressBar } from "../component/progressbar";
import ProgressChange from "../ProcessBar/ProgressChange";
import ProgressCount from "../ProcessBar/ProgressCount";

function SuggestPurpose() {
    return (
      <div className="suggest-purpose">
        <div className="progressbar">
          <div className="progressbar-item">
            <ProgressBar />
            <ProgressCount />
            <ProgressChange />
          </div>
        </div>
      </div>
    );
}

export default SuggestPurpose
            