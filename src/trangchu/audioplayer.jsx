import { BackIcon } from "../component/backicon";
import CDbooks from "../component/CDbook";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Speed from "./Audiotool/speed";
import TimeSkip from "./Audiotool/timeskip";
import { Skip30 } from "../component/skip30s";
import { Skip30Reverse } from "../component/skip30sreve";

import { LockIcon } from "../component/lockicon";
import { useState, useRef } from "react";
import { PlayGreenIcon } from "../component/playgreenicon";
import { PlusPopUp } from "../component/pluspopup";
import { CommentPopUp } from "../component/commentpopup";
import { SharePopUp } from "../component/sharepopup";


function AudioPlayers() {
  const [isOpen, setIsOpen] = useState(false);
  const [popus, setPopUs] = useState(false)
  const playerRef = useRef(null)
  return (
    <div className="audio-bg">
      <div className="overlay"></div>
      <div className="audio-sections">
        <div className="audio-wrapper">
          <div className="audio-sections">
            <BackIcon />
            <div className="option-relative">
              <img
                onClick={() => setPopUs(!popus)}
                className="option-icons"
                src="https://biboo.tecinus.vn/static/media/options-icon.ad37f65c.svg"
                alt=""
              />

              <div
                style={
                  popus
                    ? {
                        opacity: "1",
                      }
                    : { opacity: "0" }
                }
                className="option-popup"
              >
                <div className="pop-up-item">
                  <PlusPopUp />
                  <p className="pop-up-text">Thêm vào thư viện</p>
                </div>
                <div className="pop-up-item">
                  <CommentPopUp />
                  <p className="pop-up-text">Viết đánh giá</p>
                </div>
                <div className="pop-up-item">
                  <SharePopUp />
                  <p className="pop-up-text">Chia sẻ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="audio-contents">
            <div className="audio-cd-img">
              <img
                className="audio-img"
                src="https://file.mentor.vn/files/books/file-1637723174505.png"
                alt=""
              />
              <div className="cd-audio">
                <CDbooks />
              </div>
            </div>

            <div className="audio-title-para">
              <p className="audio-title">Đế chế Alibaba</p>
              <p className="audio-para">Lời mở đầu</p>
            </div>
          </div>
        </div>
      </div>

      <div className="control-section">
        <div className="audio">
          <AudioPlayer
            ref={playerRef}
            customIcons={{
              forward: <Skip30Reverse />,
              rewind: <Skip30 />,
            }}
            progressJumpSteps={{
              backward: 30000,
              forward: 30000,
            }}
            customAdditionalControls={[<Speed playerRef={playerRef} />]}
            customVolumeControls={[
              <TimeSkip
                open={isOpen}
                setOpen={setIsOpen}
                playerRef={playerRef}
              />,
            ]}
            showJumpControls={true}
            autoPlay
            src="https://file.mentor.vn/files/books/lesson/file-1636628249308.mp3"
            // onPlay={(e) => console.log("onPlay")}
            showSkipControls={true}
          />
        </div>
      </div>

      <div
        style={
          isOpen
            ? {
                transform: "translateX(0)",
              }
            : { transform: "translateX(100%)" }
        }
        className="option-chapter unbox"
      >
        <div className="option-item">
          <div className="option-item-title">
            Phần 01: Lý do khiến bạn chưa thành...
          </div>

          <div className="option-item-first">
            <PlayGreenIcon />
            <span className="option-item-first-para">Lời mở đầu</span>
          </div>

          <div className="option-item-first">
            <LockIcon />
            <span className="option-item-second-para">
              Chương 01: Lý do khiến bạn chưa th....
            </span>
          </div>

          <div className="option-item-first">
            <span className="option-item-third-para">
              Chương 02: Thói quen thành công giúp bạn i..
            </span>
          </div>

          <div className="option-item-first">
            <span className="option-item-third-para">Tông kết chương 01</span>
          </div>

          <div className="option-item-first">
            <span className="option-item-third-para">Ôn luyện chương 01</span>
          </div>
        </div>

        <div className="option-item">
          <div className="option-item-title">
            Phần 02: Động lực cuộc sống của nhữ..
          </div>

          <div className="option-item-first">
            <PlayGreenIcon />
            <span className="option-item-first-para">Lời mở đầu</span>
          </div>

          <div className="option-item-first">
            <LockIcon />
            <span className="option-item-second-para">
              Chương 01: Lý do khiến bạn chưa th....
            </span>
          </div>

          <div className="option-item-first">
            <span className="option-item-third-para">
              Chương 02: Thói quen thành công giúp bạn i..
            </span>
          </div>

          <div className="option-item-first">
            <span className="option-item-third-para">Tông kết chương 02</span>
          </div>

          <div className="option-item-first">
            <span className="option-item-third-para">Ôn luyện chương 02</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayers;
