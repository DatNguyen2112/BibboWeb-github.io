import { useState } from "react";
import { BusinessIcon } from "../component/businessicon";
import { FamilyIcon } from "../component/familyicon";
import { HistoryIcon } from "../component/historyicon";
import { MarketingIcon } from "../component/makertingicon";
import { MoneyIcon } from "../component/moneyicon";
import { TalkIcon } from "../component/talkicon";
import { TraditionIcon } from "../component/traditionalicon";
import { UpdateIcon } from "../component/upgadeicon";

function CategoryContainer() {
  const [option, setOption] = useState(1);

  const handleClick = (index) => {
    setOption(index);
  };

  return (
    <div className="CategotyContainer">
      <button
        onClick={() => handleClick(1)}
        className={
          option === 1 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <BusinessIcon />
        <span className="Category-para">Doanh nhân và doanh nghiệp</span>
      </button>
      <button
        onClick={() => handleClick(2)}
        className={
          option === 2 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <MoneyIcon />
        <span className="Category-para">Tài chính</span>
      </button>
      <button
        onClick={() => handleClick(3)}
        className={
          option === 3 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <MarketingIcon />
        <span className="Category-para">Marketing</span>
      </button>
      <button
        onClick={() => handleClick(4)}
        className={
          option === 4 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <UpdateIcon />
        <span className="Category-para">Phát triển bản thân</span>
      </button>
      <button
        onClick={() => handleClick(5)}
        className={
          option === 5 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <FamilyIcon />
        <span className="Category-para">Gia đình và sức khỏe</span>
      </button>
      <button
        onClick={() => handleClick(6)}
        className={
          option === 6 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <TalkIcon />
        <span className="Category-para">Giao tiếp và ứng xử</span>
      </button>
      <button
        onClick={() => handleClick(7)}
        className={
          option === 7 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <TraditionIcon />
        <span className="Category-para">Văn hóa</span>
      </button>
      <button
        onClick={() => handleClick(8)}
        className={
          option === 8 ? "CategoryOption activeCate" : "CategoryOption"
        }
      >
        <HistoryIcon />
        <span className="Category-para">Lịch sử</span>
      </button>
    </div>
  );
}

export default CategoryContainer;
