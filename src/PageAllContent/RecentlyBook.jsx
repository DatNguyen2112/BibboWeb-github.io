import ProgressCustom from "./ProgressCustom";




function RecentlyBook() {
  

  return (
    <div className="recently-book">
      <div className="recently-img">
        <img
          className="recently-photos"
          src="https://s3-alpha-sig.figma.com/img/a240/2bbe/b95543079fb66478cf3f5ef879c8d53d?Expires=1664150400&Signature=I3bxlHOoAk~h9J08MR6PradZjGEBHZPj03wAuXOrFanffhPcvH4WHaYTwdSSvU1JMw9xW4uzbpOuc8eMARGJIt4b-Lfvjd3lcflCzZmaAIc94uSKpRayGBhK3OPu-76VIIJyyQVossUmo72fbiSrpooa85AHK1KndvGVKfsBWY7sosSvrPWql4p4LRr~bQPopPsXVHIPOdL8EHthEwu~ktBuV56z-oWp9DHD1e8lsws-1nsXp~KZU~x1Z-KNGLIPQRFOQY5wngndpyd9KcNkj2NlnM5LVYo2zLhIYDiiEtJ0lyPWKNT5tZISK9cZpxy81Rv1FtNBk2z2aomC6BgsYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
      </div>

      <div className="recently-content">
        <div className="recently-near">
          <p className="near-para">Đang xem gần đây</p>
        </div>

        <p className="recently-paras">
          Barack Obama và sự nghiệp The Audacie of the Legend of all the time
        </p>

        <div className="Author">
          <small className="recently-author">Barack Obama</small>
        </div>

        <div className="progress-row">
          <ProgressCustom />
          <small className="progress-percent">60%</small>
        </div>

        <div className="recently-continute">
          <button className="recently-continute-btn">Tiếp tục đọc</button>
        </div>
      </div>
    </div>
  );
}

export default RecentlyBook;
