import CDbooks from "../../component/CDbook";
import { StarIcon } from "../../component/staricon";
import { StarIcons } from "../../component/staricons";

function DetailBookContent() {
  return (
    <div className="detail-book-content">
      <div className="detail-books">
        <div className="detail-book-img">
          <img
            className="detail-photos"
            src="https://s3-alpha-sig.figma.com/img/e41e/6b1f/8a68d2f3b13f69fe966733ded619227b?Expires=1659312000&Signature=D0nxF88IRgOCjV69AN5cpw5A63R3Q8Cg~L8pFSh7~yLH0L85hshPiF01V3Yy76Y2pS-IXeBXgb9C1zA4fmnh8HRwtMYoqqe8FRf1gfegF-plWPDbgWqTXK9uE9nzXr52kjbNBzg4m9VwpXUdZ5Mx9sj30wd6uSMVXZJpAdSCn1eID7xx~Dy-Hb4gx1WDVrrOYeHNK6WzSSD9djcbWOpxn-mO6TRViaoOAdTootAAJRHnr6r98yqHYzInSjUbRNQKRaRgB405GQkUL~6Df4NMND7EhQ7IroHNpVewTEyPDrHp2t0dKWmRNaoOaz991URfWkynxR1iZL4Vz6WRYADH2g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />

          <div className="Cd-book">
            <CDbooks />
          </div>
        </div>

        <div className="detail-book-vote">
          <StarIcons />
          <StarIcons />
          <StarIcons />
          <StarIcons />
          <StarIcons />
        </div>
      </div>
      <div className="detail-contents">
        <p className="detail-contents-para">
          The Swallow A Novel Can they do that tomorrow night?
        </p>

        <small className="details-author">Lisa Lutz</small>

        <div className="details-btns">
          <div className="FreeBtn">
            <button className="FreeSubmit">Nghe audio miễn phí</button>
          </div>
          <div className="TryBtn">
            <button className="TrySubmit">Đọc thử</button>
          </div>
          <div className="BuyNow">
            <img
              className="BuyNowIcon"
              src="https://biboo.tecinus.vn/static/media/Cart.7ec839df.svg"
              alt=""
            />

            <p className="BuyNowPara">Mua ngay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBookContent;
