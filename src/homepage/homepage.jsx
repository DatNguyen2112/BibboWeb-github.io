import {useState} from 'react'
import PageAllContent from '../homenavcontent/pageAllcontent'
import PageLibrary from '../homenavcontent/pageLibrary';
import PagePresent from '../homenavcontent/pagePresent';


function HomePage() {
    const types = ['Tất cả', 'Thư viện', 'Quà tặng']
   
    const [tab, setTab] = useState(types[0])

    return (
      <div className="homes">
        <div className="homes-content">
          <div className="homes-navbar">
            {types.map((type, index) => {
              return (
                <button
                  className="span-tabs"
                  key={index}
                  style={
                    tab === type
                      ? {
                          borderBottom: "5px solid #3D40C6",
                          color: "#000",
                        }
                      : {}
                  }
                  onClick={() => setTab(type)}
                >
                  {type}
                </button>
              );
            })}

            {tab === "Tất cả" ? <PageAllContent /> : ""}
            {tab === "Thư viện" ? <PageLibrary /> : ""}
            {tab === "Quà tặng" ? <PagePresent /> : ""} 
          </div>
        </div>
      </div>
    );
}

export default HomePage