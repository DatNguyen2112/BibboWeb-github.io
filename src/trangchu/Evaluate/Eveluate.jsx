import { CameraIcon } from "../../component/cameraicon";
import { StarIcon } from "../../component/staricon";
import { StarIcons } from "../../component/staricons";
import { SubmitIcon } from "../../component/submiticon";
import Comments from "./Comment";
import FormEveluate from "./FormEveluate";

function Eveluate() {
  return (
    <div className="eveluate-view">
      <div className="eveluate-content">
        <p className="evaluate-title">
          Hãy để lại cảm nhận của bạn về cuốn sách nhé!
        </p>

        <p className="eveluate-para">
          Đánh giá sẽ giúp chúng tôi cải thiện chất lượng sản phẩm
        </p>

        <div className="eveluate-rate">
          <StarIcons />
          <StarIcons />
          <StarIcons />
          <StarIcons />
          <StarIcons />
        </div>
        
        <FormEveluate />

        <Comments />
      </div>
    </div>
  );
}

export default Eveluate;
