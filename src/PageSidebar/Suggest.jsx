import { StarIcon } from "../component/staricon";

function Suggest() {
    return (
      <div className="suggest-favorite-book">
        <div className="favorite-img">
          <div className="rank"># 1</div>
          <img
            className="favorite-photo"
            src="https://file.mentor.vn/files/books/file-1634875714424.jpg"
            alt=""
          />
        </div>

        <div className="favorite-content">
          <div className="favorite-category-first">
            <p className="category-para">Kinh tế và tài chính</p>
          </div>

          <div className="favorite-title">
            <h2>Đàn ông sao hỏa đàn bà sao</h2>
          </div>

          <div className="favorite-author">
            <p>Amada Natsuki</p>
          </div>

          <div className="favorite-rate">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <small className="favorite-number">(122)</small>
          </div>
        </div>
      </div>
    );
}

export default Suggest