import PageNofication from "./pageNofication";

function Nofication() {
  return (
    <div className="homes">
      <div className="homes-content">
        <p className="search-title">Thông báo</p>

        <div className="limit-creator-no-flex">
          <PageNofication />
          <div className="no-nofication-photos">
            <img
              className="no-nofication-img"
              src="https://biboo.tecinus.vn/static/media/not-notice.dfbff4eb.png"
              alt=""
            />
          </div>

          <div className="nofication-para">
            <p className="nofication-paras">Chưa có thông báo nào</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nofication;
