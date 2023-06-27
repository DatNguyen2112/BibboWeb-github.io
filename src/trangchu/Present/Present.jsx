import Chapter1 from "./Chapter1";
import PresentContent from "./PresentContent";

function Present() {
  return (
    <div className="Present-contents">
      <ul>
        <li className="PresentTime">
          <span className="Times">Thời lượng</span>{" "}
          <span className="TimesValue">: 2 tiếng 45 phút</span>
        </li>
        <li className="PresentTime">
          <span className="Times">Số trang </span>{" "}
          <span className="TimesValue">: 203 trang</span>
        </li>
        <li className="PresentTime">
          <span className="Times">Thể loại</span>{" "}
          <span className="TimesValue">: Tiểu thuyết</span>
        </li>
      </ul>

      <PresentContent />
      <Chapter1 />
    </div>
  );
}

export default Present;
