import { CameraIcon } from "../../component/cameraicon";
import { SubmitIcon } from "../../component/submiticon";

function FormEveluate() {
    return (
      <form action="">
        <div className="eveluate-text">
          <textarea
            className="eveluate-texts"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Hãy viết cảm nhận về cuốn sách..."
          ></textarea>

          <div className="eveluateMore">
            <div className="eveluate-more">
              <CameraIcon/>
              <small className="eveluate-para-more">Thêm ảnh</small>
            </div>

            <div className="Submit-icon">
              <SubmitIcon />
            </div>
          </div>
        </div>
      </form>
    );
}

export default FormEveluate