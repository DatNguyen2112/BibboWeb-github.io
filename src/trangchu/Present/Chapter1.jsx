import Carousel from "../../PageAllContent/Allslider";
import ChapterFourClose from "./PartOfChapter1/ChapterFourClose";
import CarouselChapter from "./PartOfChapter1/ChapterSlide";
import ChapterThreeClose from "./PartOfChapter1/ChapterThreeClose";
import ChapterTwoClose from "./PartOfChapter1/ChapterTwoClose";
import Paragraph1 from "./PartOfChapter1/Paragraph1";
import Paragraph2 from "./PartOfChapter1/Paragraph2";
import Paragraph3 from "./PartOfChapter1/Paragraph3";
import Paragraph4 from "./PartOfChapter1/Paragraph4";
import Paragraph5 from "./PartOfChapter1/Paragraph5";
import Paragraph6 from "./PartOfChapter1/Paragraph6";
import Paragraph7 from "./PartOfChapter1/Paragraph7";

function Chapter1() {
    return (
      <div className="chapter-one">
        <p className="chapter-one-title">
          Chương 01: Bàn về kế hoạch cuộc sống trong 30 phút
        </p>

        <Paragraph1 />
        <Paragraph2 />
        <Paragraph3 />
        <Paragraph4 />
        <Paragraph5 />
        <Paragraph6 />
        <Paragraph7 />
        <ChapterTwoClose />
        <ChapterThreeClose />
        <ChapterFourClose />
 
        <div className="book-slider width1000">
          <div className="slick-slider">
            <h1 className="slider-title">Sách cùng thể loại</h1>
            <div className="slider">
              <CarouselChapter />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Chapter1