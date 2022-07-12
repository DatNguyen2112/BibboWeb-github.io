import SliderBook from "../slider/slider";
import AllSearch from "../PageAllContent/Allsearch";
import RecentlyBook from "../PageAllContent/RecentlyBook";
import Carousel from "../PageAllContent/Allslider";

function PageAllContent() {
  return (
    <div className="all-content">
      <div className="Search">
        <AllSearch />
      </div>

      <div className="recently-book">
        <RecentlyBook />
      </div>

      <div className="book-slider">
        <div className="slick-slider">
          <h1 className="slider-title">Gợi ý cho bạn</h1>
          <div className="slider">
            <Carousel />
          </div>
        </div>
      </div>

      <div className="book-slider">
        <div className="slick-slider">
          <h1 className="slider-title">Sách hay phải đọc</h1>
          <div className="slider">
            <Carousel />
          </div>
        </div>
      </div>

      <div className="books-slider">
        <SliderBook />
      </div>

      <div className="book-slider">
        <div className="slick-slider">
          <h1 className="slider-title">Marketing và bán hàng</h1>
          <div className="slider">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageAllContent;
