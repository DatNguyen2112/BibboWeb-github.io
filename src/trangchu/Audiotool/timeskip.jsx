import ListAudioIcon from "../../component/listaudioicon";
import { TimeSkipIcon } from "../../component/timeskipicon";
import { useState } from "react";
function TimeSkip({ setOpen, open, playerRef }) {
  const [ispopup, setIsPopUp] = useState(false);
  const handleSetTime = (seconds) => {
    //pause
    playerRef.current.audio.current.play();
    console.log(playerRef.current.audio.current.play())
    setInterval(() => {
      console.log("Da chay xong pausetime");
      playerRef.current.audio.current.pause();
    }, seconds);

    setIsPopUp(false)
  };
  return (
    <div className="speed-book">
      <div className="speed-e-book">
        <button onClick={() => setIsPopUp(!ispopup)} className="e-book-btn">
          <TimeSkipIcon />
        </button>
        <p className="speed-e-book-title">Hẹn giờ</p>

        {ispopup && (
          <div className="speed-option">
            <ul className="speed-options">
              <li className="speed-detail-title">Hẹn giờ tắt</li>
              <li className="speed-detail">Hêt phần</li>
              <li className="speed-detail">Hết chương</li>
              <li onClick={() => handleSetTime(120000)} className="speed-detail">
                120s
              </li>
              <li onClick={() => handleSetTime(60000)} className="speed-detail">
                60s
              </li>
              <li onClick={() => handleSetTime(45000)} className="speed-detail">
                45s
              </li>
              <li onClick={() => handleSetTime(30000)} className="speed-detail">
                30s
              </li>
              <li onClick={() => handleSetTime(15000)} className="speed-detail">
                15s
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="speed-e-book">
        <button onClick={() => setOpen(!open)} className="e-book-btn">
          <ListAudioIcon />
        </button>
        <p className="speed-e-book-title">Mục lục</p>
      </div>
    </div>
  );
}

export default TimeSkip;
