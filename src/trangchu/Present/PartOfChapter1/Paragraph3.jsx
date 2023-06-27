import { CartIcon } from "../../../component/carticon";
import { LockIcon } from "../../../component/lockicon";
import ShopIcon from "../../../component/shopicon";

function Paragraph3() {
    return (
      <div className="Paragraph-one">
        <div className="paragraph">
          <p className="paragraphTitle brown-color">Đoạn 03: Thay đổi để thành công</p>
        </div>

        <div className="paragraph-lock">
          <div className="paragraphLock">
            <LockIcon />
            <p className="paragraphLockContent">CHƯA MỞ KHÓA</p>
          </div>
          <button className="paragraphBuyBook">
            <CartIcon />
            <p className="BuyBookContent">MUA SÁCH ĐỂ MỞ KHÓA TOÀN BỘ</p>
          </button>
        </div>
      </div>
    );
}

export default Paragraph3