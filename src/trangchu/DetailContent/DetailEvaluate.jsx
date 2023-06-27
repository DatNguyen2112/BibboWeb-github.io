import { useState } from "react";
import Eveluate from "../Evaluate/Eveluate";
import Present from "../Present/Present";
function DetailEvaluate() {
  const tabs = ["Giới thiệu", "Đánh giá"];
  const [type, setType] = useState(tabs[0]);
  return (
    <div>
      {tabs.map((tab, index) => {
        return (
          <button
            className="span-tabs"
            key={index}
            style={
              tab === type
                ? {
                    color: "#000",
                  }
                : {}
            }
            onClick={() => setType(tab)}
          >
            {tab}
            <div
              className="border-bottom"
              style={
                tab === type
                  ? {
                      backgroundColor: "#3D40C6",
                      height: "8px",
                      borderRadius: "4px",
                      minWidth: "100%",
                      marginTop: "8px",
                      marginLeft: "-3px",
                    }
                  : {}
              }
            ></div>
          </button>
        );
      })}

      {type === "Giới thiệu" ? <Present /> : ""}
      {type === "Đánh giá" ? <Eveluate /> : ""}
    </div>
  );
}

export default DetailEvaluate;
