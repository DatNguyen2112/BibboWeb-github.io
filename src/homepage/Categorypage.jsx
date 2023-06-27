import CarouselBusiness from "../optioncontent/businessoption";
import ListBooks from "../PagePresent/ListBook";
import SliderBook from "../slider/slider";
import CategoryContainer from "./CategoryContainer";

function CategoryPage() {
  return (
    <div className="homes">
      <div className="homes-content">
        <p className="search-title">Danh mục</p>

        <CategoryContainer />

        <div className="books-slider">
          <SliderBook />
        </div>

        <div className="book-slider">
          <p className="search-para">Gợi ý cho bạn</p>
          <div className="slick-slider">
            <div className="slider">
              <CarouselBusiness />
            </div>
          </div>
        </div>

        <p className="list-title">Tất cả các sách</p>
        <ListBooks />
      </div>
    </div>
  );
}

export default CategoryPage;
