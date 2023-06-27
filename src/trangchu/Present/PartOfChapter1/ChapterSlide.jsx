import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselChapter() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true    
  };

  const CarouselItem = [
    {
      id: 1,
      link: "https://s3-alpha-sig.figma.com/img/7de6/6d86/1ba9a4d99798a4b6e21b14b139f35634?Expires=1659312000&Signature=gp6gxE1Y7vqFf8zgy2ZKUEyjXz6MfuQn0bpmXtMXTqtw2v~NmrR9SEHprK95Hp5oRUhu2bI5vK1IPCTrC5TLCu6hy8mbm4Q8FDyqjd3VK62liqOj5LNohfRHbutj65gBtBHSVY4fXQ1RDmP733r9GELkJbUUi1WxKZe3TJnlIkukNg9xVmLiaY3cg2hndn-RZ6pI4mo2Agin97iOcFj9y27e7Hi2IYwDNbYKzxPCoR5w8k2GnNLBA0IqmpRkHN3~jvrkGL1iecv5bmFG0k-y-kg7YscvAGqSIUSJGJQhdF7tRReubuGEQw-T910XEf0y2fT9i2up3EN-ds5~Em1xQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Can they do that tomorrow?",
      paraMini: "John Wick",
    },
    {
      id: 2,
      link: "https://file.mentor.vn/files/books/file-1639449235119.png ",
      slidePara: "Đàn ông sao hỏa đàn bà sao",
      paraMini: "Amada Natsuki",
    },
    {
      id: 3,
      link: "https://s3-alpha-sig.figma.com/img/95b7/b92e/3439ec6df443d4e14ddbf5b735f4af40?Expires=1659312000&Signature=erCXckigSClDol6T3q~75U5Ewl2feDVq3WhLgOVQ~fY2XcWrCJuvi-YQcg1NPJQJKwFSf3BWg7j6Dis4fZ1EBNOmM7wEqv8n0N12jvi1Xge08nMKUn-uGWhuzakETl62OOFFnnMHwaxvZDdXOjnpY9QozeUYgBL8774WscqF040oJZ88ZJjpSzw2kV8f-rE0fIit10qRm1g6RIL4xl0MWkDzudBbSnGdb6EiUuTTES~~qqgnBi9Gr1cGXOgSAT69N~l7WDIj1FAy9Vbrj55VdJtPG72s3Xx6vtj6-~n7CsZ68dshTWaWezoZiH0vtNIymNBkm-KzY2HF8IpaoaxrCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Follow me to ground",
      paraMini: "Nguyễn Hiến Lê",
    },
    {
      id: 4,
      link: "https://s3-alpha-sig.figma.com/img/8d9e/7e3e/ae919c038456a35704363c2205b84f1c?Expires=1659312000&Signature=ZOylr0VXr-okXyPiyMhJ2yX5stdWD9iRsRjXg7BVPAEdpHyKo7z4UWLLjR2hEDY5RetX1TDEsZ64C-t2Om25eETBQkRwAcQz162Vr1ry12onzFfM19HwVt4ip07SZK3RsyGW8MlblmHaKfQlXX4agaq9z3UVE9KmwhYnJST3xMeQd23fiww1uJ6DsYQbPrwzT9PK9hIA8u71FuI0bFq3q1Q~vm-MkVzUug3H2C3DXzyGSElW1PoHt0eLHL3ujTR3IO~V8kA04t6X9XUBaDPDk7NPEjZlG3bJzxGj-vwy7vyrw8kzfmbwh2lo6-59MfYaotEGkB2-nu3L1dsul3szEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Barrack Obama the audacity of",
      paraMini: "Barrack Obama",
    },
    {
      id: 5,
      link: "https://s3-alpha-sig.figma.com/img/3782/5ade/658bd6b1723a729a560c35834ac68eb5?Expires=1659312000&Signature=PpFUcWnciXTkyE4jtoYEIf-zB1f63p7WW4D7omBVKa3DpxXikYIftkbEUF2nCD~S-BpGTFaJJBFnF-QN8aGd11~Gu1AGcBrZeyqULoNS96gOVhClJaV7fESOBDiLvh7S~~t8CdM5tA2TQ3mXZg2-kmoHmRPHtyH24NwUvjAateDk36JsRy6pJ5bQhULq5aIniB-eu~tktKqaIt0JdtiJeoWHBBiiO8RhCxcdTjVg0V9uyEn-nm~Z~AVv2fydrcT0SauULvyxbTBXZwzG3B3NAwpwNY7pGABKkZHfH2KZV-rMTDoagGqR0JY5dlnbnVX0A~mzCcM34VlquJPtOtJTzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Mexican Gothic Gone Girl",
      paraMini: "Mozzah Ceeca",
    },
    {
      id: 6,
      link: "https://s3-alpha-sig.figma.com/img/95b7/b92e/3439ec6df443d4e14ddbf5b735f4af40?Expires=1659312000&Signature=erCXckigSClDol6T3q~75U5Ewl2feDVq3WhLgOVQ~fY2XcWrCJuvi-YQcg1NPJQJKwFSf3BWg7j6Dis4fZ1EBNOmM7wEqv8n0N12jvi1Xge08nMKUn-uGWhuzakETl62OOFFnnMHwaxvZDdXOjnpY9QozeUYgBL8774WscqF040oJZ88ZJjpSzw2kV8f-rE0fIit10qRm1g6RIL4xl0MWkDzudBbSnGdb6EiUuTTES~~qqgnBi9Gr1cGXOgSAT69N~l7WDIj1FAy9Vbrj55VdJtPG72s3Xx6vtj6-~n7CsZ68dshTWaWezoZiH0vtNIymNBkm-KzY2HF8IpaoaxrCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Follow me to ground",
      paraMini: "Nguyễn Hiến Lê",
    },
    {
      id: 7,
      link: "https://s3-alpha-sig.figma.com/img/8d9e/7e3e/ae919c038456a35704363c2205b84f1c?Expires=1659312000&Signature=ZOylr0VXr-okXyPiyMhJ2yX5stdWD9iRsRjXg7BVPAEdpHyKo7z4UWLLjR2hEDY5RetX1TDEsZ64C-t2Om25eETBQkRwAcQz162Vr1ry12onzFfM19HwVt4ip07SZK3RsyGW8MlblmHaKfQlXX4agaq9z3UVE9KmwhYnJST3xMeQd23fiww1uJ6DsYQbPrwzT9PK9hIA8u71FuI0bFq3q1Q~vm-MkVzUug3H2C3DXzyGSElW1PoHt0eLHL3ujTR3IO~V8kA04t6X9XUBaDPDk7NPEjZlG3bJzxGj-vwy7vyrw8kzfmbwh2lo6-59MfYaotEGkB2-nu3L1dsul3szEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      slidePara: "Barrack Obama the audacity of",
      paraMini: "Barrack Obama",
    },
    {
      id: 8,
      link: "https://s3-alpha-sig.figma.com/img/3782/5ade/658bd6b1723a729a560c35834ac68eb5?Expires=1659312000&Signature=PpFUcWnciXTkyE4jtoYEIf-zB1f63p7WW4D7omBVKa3DpxXikYIftkbEUF2nCD~S-BpGTFaJJBFnF-QN8aGd11~Gu1AGcBrZeyqULoNS96gOVhClJaV7fESOBDiLvh7S~~t8CdM5tA2TQ3mXZg2-kmoHmRPHtyH24NwUvjAateDk36JsRy6pJ5bQhULq5aIniB-eu~tktKqaIt0JdtiJeoWHBBiiO8RhCxcdTjVg0V9uyEn-nm~Z~AVv2fydrcT0SauULvyxbTBXZwzG3B3NAwpwNY7pGABKkZHfH2KZV-rMTDoagGqR0JY5dlnbnVX0A~mzCcM34VlquJPtOtJTzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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
                className="slider-photo width200"
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

export default CarouselChapter;
