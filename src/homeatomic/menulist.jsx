import {useState} from 'react'
import { Homeicon } from '../component/homeicon';
import { Listicon } from '../component/listicon';
import { PersonalIcon } from '../component/personalicon';
import { SearchIcon } from '../component/search-icon';
import { Link } from 'react-router-dom'
function MenuList() {
    const [toogle, setToogle] = useState(1);

    const handelClick = (index) => {
      setToogle(index);
    };

    return (
      <div>
        <Link to='/'
          onClick={() => handelClick(1)}
          className={
            toogle === 1 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <Homeicon />  
          </div>

          <div className="homes-title">
            <Link className='links' to='/'>Home</Link>
          </div>
        </Link>

        <Link to='/Search'
          onClick={() => handelClick(2)}
          className={
            toogle === 2 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <SearchIcon />
          </div>

          <div className="homes-title">
            <Link className='links' to = '/Search'>Tìm kiếm</Link>
          </div>
        </Link>

        <Link to='/Category'
          onClick={() => handelClick(3)}
          className={
            toogle === 3 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <Listicon />
          </div>

          <div className="homes-title">
            <Link className='links' to="/Category">Danh mục</Link>
          </div>
        </Link>

        <Link to='/Profile'
          onClick={() => handelClick(4)}
          className={
            toogle === 4 ? "menu-lists-item activeTabs" : "menu-lists-item"
          }
        >
          <div className="homes-icon">
            <PersonalIcon />
          </div>

          <div className="homes-title">
            <Link className='links' to = "/Profile">Cá nhân</Link>
          </div>
        </Link>
      </div>
    );
}

export default MenuList