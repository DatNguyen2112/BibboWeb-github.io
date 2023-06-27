
function Paragraph1() {
    return (
      <div className="Paragraph-one">
        <div className="paragraph">
          <p className="paragraphTitle">
            Đoạn 01: Lời mở đầu - Cách cuộc sống vận hành và những lời cam kết
            với cuộc đời của chính mình
          </p>

          <div className="paragraph-btns">
            <div className="ReadBook">
              <button className="readBookSubmit">Đọc ebook</button>
            </div>

            <div className="ListenAudio">
              <button className="ListenAudioSubmit">
                <img
                  className="PlayIcon"
                  src="https://biboo.tecinus.vn/static/media/play-audio-icon.6798ce68.svg"
                  alt=""
                />
                <span>Nghe Audio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Paragraph1