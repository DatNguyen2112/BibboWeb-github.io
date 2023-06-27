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
      link: "https://s3-alpha-sig.figma.com/img/3782/5ade/658bd6b1723a729a560c35834ac68eb5?Expires=1664150400&Signature=N9lqIZPoI-hsflpeJxmrG2PVwRIl15h4lSwWAvreEUJm39bPWW-dR6cq-wSx4T7r0jEREx4jHV7dBgeAIe506Ty0ZXI8flZu~FpWXZAeJmzMEffpZBtPFzKymUKQ9AqIW-NzJBsV~BUfcAh49W32L099O-EXP7gkt3zbX23gRMqy4mHXRz9K91PizQh6FzQx9fup0CHqxhJ2daMmu3WNzwH8vfAWKoBFAyQyYzKcDQV1GndEVBSBzaP3ZHLg2YlqAcNsm3s7IIPPslZ5nCHyCidRPfjR4KZ-gQQM43Mr4vabcIbbNRYfHapZ-Yy5zwgjFtqqOdkYc0HElTA1nthCXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Follow me to ground",
      paraMini: "Nguyễn Hiến Lê",
    },
    {
      id: 2,
      link: "https://s3-alpha-sig.figma.com/img/7de6/6d86/1ba9a4d99798a4b6e21b14b139f35634?Expires=1664150400&Signature=Wlf80yjATAmhD-V-dxJaoZGjAkKFjDb7YiDp~9YsglHY8yifSy8o2ZSWNPJkQ-qKTMJvuykQZHdLv70GxuLfBMfpQrDK0bjL~nKmbelb7JPaXgGYsCkzm1j9OsrKUCD2SnK0uFltys78LcIGo~mQWbZwG4Rjz9x4UXzkK7ll8v6YwPrK46tIjzgwOGPoy1gdY1mTY2828sXZoojln2zwPsmeInFsBgZ1gwxGE47061hbZuxvzCPx34wd5bfVrLoWJOjSH~wGCxqHxUKewShvBGrJNo0U2zxufHb1gb-UMxFFtghAtiepSySqIwxxJq-rXItCak3aQ-Ij7hV1zYtbfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Can they do that tomorrow?",
      paraMini: "John Wick",
    },
    {
      id: 3,
      link: "https://s3-alpha-sig.figma.com/img/8d9e/7e3e/ae919c038456a35704363c2205b84f1c?Expires=1664150400&Signature=KyWZ5vMb9KFpPxcIW36wYj7G~cdwTzz~Am~mK1y~ayfoiAAHtjNMzQGmqU8oPPL-aKBPDV4JT4vlYKf1BlXL0SYv-ugObsMVNQwWDdgtCk2kOKrCKL6aJeUJHQqUkAvHFNjHHoZF4JSE9cuQXmwKwlFF9n93-nqy42PalvMrTIX2WYIBPG68KrqRpjDnf5X0TLwidACZi1t2WvID7VDbuCMBmncrkjzSKOBwo8kYfkjSdiJk3ZRo7nF7pPwFO9~rp0lyv4GioCAz1GctG8dYxaBVOreEYhH-GFhlOVKWhKt33lO~EFPblObvOxDlyKxH2TKK335a~CyT0zYMmert4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Barrack Obama the audacity of",
      paraMini: "Barrack Obama",
    },
    {
      id: 4,
      link: "https://s3-alpha-sig.figma.com/img/3782/5ade/658bd6b1723a729a560c35834ac68eb5?Expires=1664150400&Signature=N9lqIZPoI-hsflpeJxmrG2PVwRIl15h4lSwWAvreEUJm39bPWW-dR6cq-wSx4T7r0jEREx4jHV7dBgeAIe506Ty0ZXI8flZu~FpWXZAeJmzMEffpZBtPFzKymUKQ9AqIW-NzJBsV~BUfcAh49W32L099O-EXP7gkt3zbX23gRMqy4mHXRz9K91PizQh6FzQx9fup0CHqxhJ2daMmu3WNzwH8vfAWKoBFAyQyYzKcDQV1GndEVBSBzaP3ZHLg2YlqAcNsm3s7IIPPslZ5nCHyCidRPfjR4KZ-gQQM43Mr4vabcIbbNRYfHapZ-Yy5zwgjFtqqOdkYc0HElTA1nthCXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Mexican Gothic Gone Girl",
      paraMini: "Mozzah Ceeca",
    },
    {
      id: 5,
      link: "https://s3-alpha-sig.figma.com/img/95b7/b92e/3439ec6df443d4e14ddbf5b735f4af40?Expires=1664150400&Signature=MRzBgkL0eHfo9MNYegPuCK3ozZaIxs4ZEddcOSUYmxMYDUB9NEfwduv5Inbqe~eMmSdJudE3fJ3RuM8epsp6wmpVUc8c6Dhy3S0QW0lpdFq0eGGKZinq6wEG6bLz2oZyqPvV-K059RxtcxcyPKa0Ci0XthtapK7SmJySdjg0qw7JAk1BPsSpoUAOi7cKMmfMKzzeUU2vdPgDij1knkIEHWYfd2okml7FhUtkQnahZT3IUuiijuUA85T5AXEKJBLu1SNiWPxEZ6wPdwc7MCW3mjynhOQ36QPPjFeWBMu-3fo24fyToeeM1vVCEJdrjRIzqbTuXPwDwlUE5jkFFniNUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Follow me to ground",
      paraMini: "Nguyễn Hiến Lê",
    },
    {
      id: 6,
      link: "https://s3-alpha-sig.figma.com/img/3782/5ade/658bd6b1723a729a560c35834ac68eb5?Expires=1664150400&Signature=N9lqIZPoI-hsflpeJxmrG2PVwRIl15h4lSwWAvreEUJm39bPWW-dR6cq-wSx4T7r0jEREx4jHV7dBgeAIe506Ty0ZXI8flZu~FpWXZAeJmzMEffpZBtPFzKymUKQ9AqIW-NzJBsV~BUfcAh49W32L099O-EXP7gkt3zbX23gRMqy4mHXRz9K91PizQh6FzQx9fup0CHqxhJ2daMmu3WNzwH8vfAWKoBFAyQyYzKcDQV1GndEVBSBzaP3ZHLg2YlqAcNsm3s7IIPPslZ5nCHyCidRPfjR4KZ-gQQM43Mr4vabcIbbNRYfHapZ-Yy5zwgjFtqqOdkYc0HElTA1nthCXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Can they do that tomorrow?",
      paraMini: "John Wick",
    },
    {
      id: 7,
      link: "https://s3-alpha-sig.figma.com/img/3782/5ade/658bd6b1723a729a560c35834ac68eb5?Expires=1664150400&Signature=N9lqIZPoI-hsflpeJxmrG2PVwRIl15h4lSwWAvreEUJm39bPWW-dR6cq-wSx4T7r0jEREx4jHV7dBgeAIe506Ty0ZXI8flZu~FpWXZAeJmzMEffpZBtPFzKymUKQ9AqIW-NzJBsV~BUfcAh49W32L099O-EXP7gkt3zbX23gRMqy4mHXRz9K91PizQh6FzQx9fup0CHqxhJ2daMmu3WNzwH8vfAWKoBFAyQyYzKcDQV1GndEVBSBzaP3ZHLg2YlqAcNsm3s7IIPPslZ5nCHyCidRPfjR4KZ-gQQM43Mr4vabcIbbNRYfHapZ-Yy5zwgjFtqqOdkYc0HElTA1nthCXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Barrack Obama the audacity of",
      paraMini: "Barrack Obama",
    },
    {
      id: 8,
      link: "https://s3-alpha-sig.figma.com/img/3782/5ade/658bd6b1723a729a560c35834ac68eb5?Expires=1664150400&Signature=N9lqIZPoI-hsflpeJxmrG2PVwRIl15h4lSwWAvreEUJm39bPWW-dR6cq-wSx4T7r0jEREx4jHV7dBgeAIe506Ty0ZXI8flZu~FpWXZAeJmzMEffpZBtPFzKymUKQ9AqIW-NzJBsV~BUfcAh49W32L099O-EXP7gkt3zbX23gRMqy4mHXRz9K91PizQh6FzQx9fup0CHqxhJ2daMmu3WNzwH8vfAWKoBFAyQyYzKcDQV1GndEVBSBzaP3ZHLg2YlqAcNsm3s7IIPPslZ5nCHyCidRPfjR4KZ-gQQM43Mr4vabcIbbNRYfHapZ-Yy5zwgjFtqqOdkYc0HElTA1nthCXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Mexican Gothic Gone Girl",
      paraMini: "Mozzah Ceeca",
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

export default Carousel;
