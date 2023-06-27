import BookMiniIcons from "../../component/bookminiicon";
import { useState, useEffect } from "react";
function Speed({ currentAudio, playerRef }) {
  const [popup, setPopUp] = useState(false);
  const speeds = ["0.75x", "1x", "1.25x", "1.5x", "1.75x", "2x", "3x"];

  const values = ["0.75x", "1x", "1.25x", "1.5x", "1.75x", "2x", "3x"];

  const [value, setValue] = useState(values[1]);
  const handleClick = (value) => {
    setValue(value);
    setPopUp(false);
  };

  // useEffect(() => {
  //   console.log(playerRef);
  // }, [value]);

  // useEffect(() => {
  //   if (value !== 1) {
  //     playerRef.current.audio.current.value = value;
  //   }
  // }, [currentAudio, value]);

  return (
    <div className="speed-book">
      <div className="speed-e-book">
        <button className="e-book-btn">
          <BookMiniIcons />
        </button>
        <p className="speed-e-book-title">Ebook</p>
      </div>

      <div className="speed-e-book">
        <button onClick={() => setPopUp(!popup)} className="e-book-btn">
          {value === "0.75x" ? <p>{speeds[0]}</p> : ""}
          {value === "1x" ? <p>{speeds[1]}</p> : ""}
          {value === "1.25x" ? <p>{speeds[2]}</p> : ""}
          {value === "1.5x" ? <p>{speeds[3]}</p> : ""}
          {value === "1.75x" ? <p>{speeds[4]}</p> : ""}
          {value === "2x" ? <p>{speeds[5]}</p> : ""}
          {value === "3x" ? <p>{speeds[6]}</p> : ""}
        </button>
        <p className="speed-e-book-title">Tốc độ</p>

        {popup && (
          <div className="speed-option">
            <ul className="speed-options">
              <li className="speed-detail-title">Tốc độ nghe</li>
              {values.map((value, index) => {
                return (
                  <li
                    onClick={() => handleClick(value)}
                    key={index}
                    className="speed-detail"
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Speed;
