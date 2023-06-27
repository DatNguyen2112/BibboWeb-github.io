import { LockBrownIcon } from "../../../Bookunlock/lockbrownicon";
import { CartIcon } from "../../../component/carticon";


function Paragraph4(){
    return (
      <div className="Paragraph-one">
        <div className="paragraph">
          <p className="paragraphTitle opacity-para">
            Đoạn 04: Bí quyết giúp bạn thành công
          </p>
        </div>

        <div className="paragraph-lock">
          <div className="paragraphLock">
            <LockBrownIcon />
            <p className="paragraphLockContent opacity-para">CHƯA MỞ KHÓA</p>
          </div>
          <button className="paragraphBuyBook opacity-bg">
            <CartIcon />
            <p className="BuyBookContent">MUA SÁCH ĐỂ MỞ KHÓA TOÀN BỘ</p>
          </button>
        </div>
      </div>
    );
}

export default Paragraph4