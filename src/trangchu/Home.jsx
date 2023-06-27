import { MenuImg } from "../component/menuimg";
import { Routes, Route } from 'react-router-dom'
import HomePage from "../homepage/homepage";
import Logo from "../homeatomic/logo";
import MenuList from "../homeatomic/menulist";
import SideBarIcon from "../PageSidebar/sidebaricon";
import Suggest from "../PageSidebar/Suggest";
import SuggestPurpose from "../PageSidebar/SuggestPurpose";
import Footer from "../footer/footer";
import SearchPage from "../homepage/searchpage";
import CategoryPage from "../homepage/Categorypage";
import ProfilePage from "../homepage/Profile";
import ChangeLimit from "../ProfileDetail/ChangeLimit";
import ChangePass from "../ProfileDetail/ChangePass";
import ChangeProfile from "../ProfileDetail/ChangProfile";
import Nofication from "../ProfileDetail/Nofication";
import Support from "../ProfileDetail/Support";


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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Search" element={<SearchPage />} />
          <Route path="/Category" element={<CategoryPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Profile/setup-target" element={<ChangeLimit />} />
          <Route path="/Profile/change-password" element={<ChangePass />} />
          <Route path="/Profile/update-info" element={<ChangeProfile />} />
          <Route path="/Profile/notification" element={<Nofication />} />
          <Route path="/Profile/support" element={<Support />} />
        </Routes>

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
