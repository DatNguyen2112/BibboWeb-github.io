import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const CarouselItem = [
    {
      id: 1,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 2,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 3,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 4,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 5,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 6,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 7,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 8,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 9,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 10,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 11,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 12,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 13,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 14,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 15,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
    {
      id: 16,
      link: "https://file.mentor.vn/files/books/file-1637747134796.png",
      slidePara: "Thuật luyện nhân",
      paraMini: "John Wick",
    },
  ];

  return (
    <Slider {...settings}>
      {CarouselItem.map((item) => {
        return (
          <div className="photos" key={item.id}>
            <img
              className="slider-photo"
              src={item.link}
              alt={item.slidePara}
            />
            <h3 className="slider-para">{item.slidePara}</h3>
            <p className="slider-para-mini">{item.paraMini}</p>
          </div>
        );
      })}
    </Slider>
  );
}

export default Carousel;
