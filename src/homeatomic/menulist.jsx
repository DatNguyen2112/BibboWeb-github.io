import {useState} from 'react'
import { Homeicon } from '../component/homeicon';
import { Listicon } from '../component/listicon';
import { PersonalIcon } from '../component/personalicon';
import { SearchIcon } from '../component/search-icon';
function MenuList() {
    const [toogle, setToogle] = useState(1);

    const handelClick = (index) => {
      setToogle(index);
    };

    return (
      <div>
        <div
          onClick={() => handelClick(1)}
          className={
            toogle === 1 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <Homeicon />
          </div>

          <div className="homes-title">
            <span>Home</span>
          </div>
        </div>

        <div
          onClick={() => handelClick(2)}
          className={
            toogle === 2 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <SearchIcon />
          </div>

          <div className="homes-title">
            <span>Tìm kiếm</span>
          </div>
        </div>

        <div
          onClick={() => handelClick(3)}
          className={
            toogle === 3 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <Listicon />
          </div>

          <div className="homes-title">
            <span>Danh mục</span>
          </div>
        </div>

        <div
          onClick={() => handelClick(4)}
          className={
            toogle === 4 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <PersonalIcon />
          </div>

          <div className="homes-title">
            <span>Cá nhân</span>
          </div>
        </div>
      </div>
    );
}

export default MenuList