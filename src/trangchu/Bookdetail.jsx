import { MenuImg } from "../component/menuimg";
import DetailBanner from "./DetailContent/DetailBanner";
import DetailBookContent from "./DetailContent/DetailContentBook";
import DetailEvaluate from "./DetailContent/DetailEvaluate";
import LogoNoContent from "./MenuList/LogoNoContent";
import MenuListNoContent from "./MenuList/Menulistnocontent";

function BookDetail() {
  return (
    <div className="home-app">
      <div className="home-container">
        <div className="menus menu-no-content">
          <div className="menu-no-content">
            <LogoNoContent />
          </div>

          <div className="menu-lists noMargin">
            <div className="menu-list-no-content">
              <MenuListNoContent />
            </div>
          </div>

          <div className="menu-img">
            <MenuImg />
          </div>
        </div>

        <div className="Book-content">
          <div className="Detail-bg">
            <div className="Book-content-bg"></div>

            <div className="Book-banner">
              <DetailBanner />
            </div>
            <div className="Book-detail-content">
              <DetailBookContent />
            </div>
            <div className="Book-present-and-rate">
              <DetailEvaluate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
