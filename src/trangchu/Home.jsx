import { MenuImg } from "../component/menuimg";
import HomePage from "../homepage/homepage";
import Logo from "../homeatomic/logo";
import MenuList from "../homeatomic/menulist";
import SideBarIcon from "../PageSidebar/sidebaricon";
import Suggest from "../PageSidebar/Suggest";
import SuggestPurpose from "../PageSidebar/SuggestPurpose";
import Footer from "../footer/footer";

function Home() {
  return (
    <div className="home-app">
      <div className="home-container">
        <div className="menus">
          <Logo />

          <div className="menu-lists">
            <MenuList />
          </div>

          <div className="menu-img">
            <MenuImg />
          </div>
        </div>

        <HomePage />

        <div className="suggests">
          <div className="suggets-content">
            <SideBarIcon />

            <div className="suggest-content">
              <div className="suggest-title">
                <h1 className="suggest-para">Nghe nhiều nhất</h1>
              </div>
              <div className="Suggest-item">
                <Suggest />
                <Suggest />
                <Suggest />
              </div>
            </div>

            <div className="suggest-content">
              <div className="suggest-title">
                <h1 className="suggest-para">Mục tiêu đọc sách</h1>
              </div>

              <SuggestPurpose />
            </div>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
