import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SliderBook() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: true,
  };

  const SliderItems = [
    {
      id: 1,
      img: "https://file.mentor.vn//files/categories/file-1634006052521.jpg",
    },
    {
      id: 2,
      img: "https://file.mentor.vn//files/categories/file-1634006052521.jpg",
    },
    {
      id: 3,
      img: "https://file.mentor.vn//files/categories/file-1634006052521.jpg",
    },
  ];

  return (
    <div>
      <div className="sliderCenter">
        <Slider className="sliders" {...settings}>
          {SliderItems.map((item) => {
            return (
              <div className="slider-img" key={item.id}>
                <img
                  className="imgs"
                  src={item.img}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SliderBook;
