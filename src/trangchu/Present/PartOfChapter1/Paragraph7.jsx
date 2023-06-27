import BookIcon from "../../../component/bookicon";

function Paragraph7() {
    return (
      <div className="Paragraph-one">
        <div className="paragraph">
          <p className="paragraphTitle">Ôn luyện kiến thức chương 01</p>

          <div className="paragraphResult">
            <p className="ResultSucesss">8/10 CÂU</p>
            <button className="DoNow">
              <BookIcon />
              <p className="ResultPara">LÀM BÀI NGAY</p>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Paragraph7