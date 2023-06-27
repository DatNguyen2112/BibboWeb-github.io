import { StarIcon } from "../component/staricon";

function Suggest() {
  return (
    <div className="suggest-favorite-book">
      
        <div className="rank"># 1</div>
        <img
          className="favorite-photo"
          src="https://file.mentor.vn/files/books/file-1634875714424.jpg"
          alt=""
        />
      

      <div className="favorite-content">
        <div className="favorite-category-first">Kinh tế và tài chính</div>

        <div className="title-and-author">
          <div className="favorite-title">Đàn ông sao hỏa đàn bà sao</div>

          <div className="favorite-author">Amada Natsuki</div>
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

export default Suggest;
