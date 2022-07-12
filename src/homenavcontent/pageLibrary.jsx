import { useState } from "react";
import BookCare from "../bookoption/bookcare";
import BookUnlock from "../bookoption/bookunlock";


function PageLibrary() {
  const options = ["Sách đã mở khóa", "Sách quan tâm"];

  const [choose, setChoose] = useState(options[0]);

  return (
    <div className="library-content">
      <div className="library-option">
        <div className="library-options">
          {options.map((option, index) => {
            return (
              <div key={index} className="library-option-item">
                <button
                  className="span-option"
                  style={
                    choose === option
                      ? {
                          backgroundColor: "#fff",
                        }
                      : {}
                  }
                  onClick={() => setChoose(option)}
                >
                  {option}
                </button>
              </div>
            );
          })}
        </div>

        {choose === "Sách đã mở khóa" ? <BookUnlock /> : ""}
        {choose === "Sách quan tâm" ? <BookCare /> : ""}
      </div>
    </div>
  );
}

export default PageLibrary;
