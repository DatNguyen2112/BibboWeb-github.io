import { useState } from "react";
import BookCare from "../bookoption/bookcare";
import BookUnlock from "../bookoption/bookunlock";


function PageNofication() {
  const options = ["Chưa đọc", "Đã đọc"];

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

        
      </div>
    </div>
  );
}

export default PageNofication;
