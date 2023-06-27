
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselBusiness() {
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
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Follow me to ground",
      paraMini: "Nguyễn Hiến Lê",
    },
    {
      id: 2,
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Can they do that tomorrow?",
      paraMini: "John Wick",
    },
    {
      id: 3,
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Barrack Obama the audacity of",
      paraMini: "Barrack Obama",
    },
    {
      id: 4,
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Mexican Gothic Gone Girl",
      paraMini: "Mozzah Ceeca",
    },
    {
      id: 5,
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Follow me to ground",
      paraMini: "Nguyễn Hiến Lê",
    },
    {
      id: 6,
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Follow me to ground",
      paraMini: "Nguyễn Hiến Lê",
    },
    {
      id: 7,
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Barrack Obama the audacity of",
      paraMini: "Barrack Obama",
    },
    {
      id: 8,
      link: "https://file.mentor.vn/files/books/file-1637822783728.png",
      slidePara: "Can they do that tomorrow?",
      paraMini: "John Wick",
    },
  ];

  return (
    <Slider {...settings}>
      {CarouselItem.map((item) => {
        return (
          <div className="Carou" key={item.id}>
            <div className="photos">
              <img
                className="slider-photo"
                src={item.link}
                alt={item.slidePara}
              />
              <h3 className="slider-para">{item.slidePara}</h3>
              <p className="slider-para-mini">{item.paraMini}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default CarouselBusiness;
