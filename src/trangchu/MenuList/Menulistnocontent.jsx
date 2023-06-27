

import { useState } from "react";
import { Homeicon } from "../../component/homeicon";
import { Listicon } from "../../component/listicon";
import { PersonalIcon } from "../../component/personalicon";
import { SearchIcon } from "../../component/search-icon";

function MenuListNoContent() {
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
        <div className="homes-icon paddingLeft">
          <Homeicon />
        </div>

        
      </div>

      <div
        onClick={() => handelClick(2)}
        className={
          toogle === 2 ? "menu-lists-item activeTabs" : "menu-lists-item"
        }
      >
        <div className="homes-icon paddingLeft">
          <SearchIcon />
        </div>

        
      </div>

      <div
        onClick={() => handelClick(3)}
        className={
          toogle === 3 ? "menu-lists-item activeTabs" : "menu-lists-item"
        }
      >
        <div className="homes-icon paddingLeft">
          <Listicon />
        </div>

        
      </div>

      <div
        onClick={() => handelClick(4)}
        className={
          toogle === 4 ? "menu-lists-item activeTabs" : "menu-lists-item"
        }
      >
        <div className="homes-icon paddingLeft">
          <PersonalIcon />
        </div>


      </div>
    </div>
  );
}

export default MenuListNoContent;  