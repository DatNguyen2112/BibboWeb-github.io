import AlertIcon from "../../component/alerticon";
import { BackIcon } from "../../component/backicon";
import CircleCart from "../../component/circlecart";
import OnlineIcon from "../../component/onlineicon";
import ShopIcon from "../../component/shopicon";

function DetailBanner() {
  return (
    <div className="detail-banner">
      <div className="detail-back-icon">
        <BackIcon />
      </div>

      <div className="detail-icons">
        <div className="cart-and-alert">
          <div className="detailCartIcon">
            <CircleCart />
            <div className="cart-icons">
              <ShopIcon />
            </div>
          </div>
          <div className="detailAlert">
            <CircleCart />
            <div className="Online">
              <OnlineIcon />
            </div>
            <div className="Alert">
              <AlertIcon />
            </div>
          </div>
        </div>
        <div className="avatar-icon widthIcon">
          <img
            className="avatar-img"
            src="https://scontent.fhan9-1.fna.fbcdn.net/v/t1.6435-9/70971445_113250976743702_1109665991320666112_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=45u79KHJreQAX9tbHV0&_nc_ht=scontent.fhan9-1.fna&oh=00_AT-BcKplPHcvqUoRuc2bvSZDICS3zJz-EWKR0-QfXzRo4w&oe=62F47EEC"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default DetailBanner;
