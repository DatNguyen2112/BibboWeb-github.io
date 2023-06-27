import { useState } from "react";
import PageAllContent from "../homenavcontent/pageAllcontent";
import PageLibrary from "../homenavcontent/pageLibrary";
import PagePresent from "../homenavcontent/pagePresent";

function HomePage() {
  const types = ["Tất cả", "Thư viện", "Quà tặng"];

  const [tab, setTab] = useState(types[0]);

  return (
    <div className="homes">
      <div className="homes-content">
        <div className="homes-navbar">
          <div className="Tabs">  
            {types.map((type, index) => {
              return (
                <div className="inline" key={index}>
                  <button
                    className="span-tabs"
                    style={
                      tab === type
                        ? {
                            color: "#000",
                          }
                        : {}
                    }
                    onClick={() => setTab(type)}
                  >
                    {type}
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
                </div>
              );
            })}
          </div>

          {tab === "Tất cả" ? <PageAllContent /> : ""}
          {tab === "Thư viện" ? <PageLibrary /> : ""}
          {tab === "Quà tặng" ? <PagePresent /> : ""}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
