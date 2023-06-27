import { BackIcon } from "../component/backicon";
import { PdfIcon } from "../component/pdficon";
import { PlayBoook } from "../component/playbookicon";
import React from "react";
import { useState, useRef } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import HTMLFlipBook from "react-pageflip";
import Pdf from "../trangchu/sample.pdf";
import CheckSuccessIcon from "../component/checksuccessicon";
import { LockIcon } from "../component/lockicon";
import { PlusIcons } from "../component/plusicons";
import { FeedCardIcon } from "../component/feedcardicon";
import { Plus } from "../component/Plus";
import { FullscreenIcon } from "../component/fullscreenicon";

const PageBook = React.forwardRef((props, ref) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="demoPage" ref={ref} data-density="hard">
      <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={5} pageNumber={props.pageNumber} renderTextLayer={false} />
      </Document>
    </div>
  );
});

const onFlip = () => {};

function BookPDF() {
  const book = useRef(null);
  const container = useRef(null);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [isSwipe, setIsSwipe] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const handleNext = () => {
    book.current.pageFlip().flipNext();
    setPageNumber(pageNumber + 1);
    setIsSwipe(true);
  };

  return (
    <div className="pdf-bg" style={fullscreen ? { width: "100%" } : {}}>
      <div className="pdf-contents">
        <div
          className="pdf-back-title"
          style={
            fullscreen
              ? {
                  display: "none",
                }
              : { display: "flex" }
          }
        >
          <div className="pdf-back-para">
            <BackIcon />
            <p className="pdf-title">
              The Swallow A Novel Can they do that tomorrow night?
            </p>
          </div>
          <button className="Listen-audio">
            <PlayBoook />
            Nghe Audio
          </button>
        </div>

        <div
          className="pdf-container"
          style={
            fullscreen
              ? {
                  height: "100%",
                }
              : {}
          }
        >
          <div className="pageNumbers">{pageNumber} / 20</div>
          <div
            className="container"
            style={
              fullscreen
                ? {
                    padding: "40px 10%",
                    justifyContent: "space-between",
                    marginTop: "-48px",
                  }
                : {}
            }
          >
            {pageNumber > 1 && (
              <button
                style={
                  fullscreen
                    ? {
                        marginLeft: "-150px",
                      }
                    : {}
                }
                className="button-prev"
                onClick={() => {
                  book.current.pageFlip().flipPrev();
                  setPageNumber(pageNumber - 1);
                  setIsSwipe(false);
                }}
              >
                <img
                  src="https://biboo.tecinus.vn/static/media/arrow-chevron-back-black.937e2157.svg"
                  alt=""
                />
              </button>
            )}

            <TransformWrapper>
              <TransformComponent>
                <div
                  style={
                    isSwipe
                      ? { width: "100%", transform: "translate(0px)" }
                      : { width: "100%", transform: "translateX(-17%)" }
                  }
                  className="flip-book"
                >
                  <HTMLFlipBook
                    width={900}
                    height={1350}
                    size="stretch"
                    minWidth={480}
                    maxWidth={1500}
                    minHeight={720}
                    maxHeight={2250}
                    drawShadow={true}
                    maxShadowOpacity={0}
                    showCover={true}
                    mobileScrollSupport={true}
                    useMouseEvents={false}
                    onFlip={onFlip}
                    // flippingTime={800}
                    usePortrait={true}
                    ref={book}
                  >
                    {[...Array(36)].map((item, index) => (
                      <PageBook key={index} pageNumber={index + 1} />
                    ))}
                  </HTMLFlipBook>
                </div>
              </TransformComponent>
            </TransformWrapper>

            {pageNumber && (
              <button
                style={
                  fullscreen
                    ? {
                        marginRight: "-170px",
                      }
                    : {}
                }
                className="button-next"
                onClick={handleNext}
              >
                <img
                  src="https://biboo.tecinus.vn/static/media/arrow-chevron-forward-black.d4895304.svg"
                  alt=""
                />
              </button>
            )}
          </div>

          <div
            style={
              open
                ? {
                    transform: "translateX(0)",
                  }
                : { transform: "translateX(-100%)" }
            }
            className="gift-card"
          >
            <div className="feed-card">
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">01</span>
              </div>
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">02</span>
              </div>
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">03</span>
              </div>
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">04</span>
              </div>
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">05</span>
              </div>
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">06</span>
              </div>
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">07</span>
              </div>
              <div
                style={
                  fullscreen
                    ? {
                        padding: "45px 66px",
                      }
                    : {}
                }
                className="feed-card-content"
              >
                <span className="page-number">08</span>
              </div>
            </div>
          </div>

          <div
            style={
              isOpen
                ? {
                    transform: "translateX(0)",
                  }
                : { transform: "translateX(100%)" }
            }
            className="option-chapter"
          >
            <div className="option-item">
              <div className="option-item-title">
                Phần 01: Lý do khiến bạn chưa thành...
              </div>

              <div className="option-item-first">
                <CheckSuccessIcon />
                <span className="option-item-first-para">Lời mở đầu</span>
              </div>

              <div className="option-item-first">
                <LockIcon />
                <span className="option-item-second-para">
                  Chương 01: Lý do khiến bạn chưa th....
                </span>
              </div>

              <div className="option-item-first">
                <span className="option-item-third-para">
                  Chương 02: Thói quen thành công giúp bạn i..
                </span>
              </div>

              <div className="option-item-first">
                <span className="option-item-third-para">
                  Tông kết chương 01
                </span>
              </div>

              <div className="option-item-first">
                <span className="option-item-third-para">
                  Ôn luyện chương 01
                </span>
              </div>
            </div>

            <div className="option-item">
              <div className="option-item-title">
                Phần 02: Động lực cuộc sống của nhữ..
              </div>

              <div className="option-item-first">
                <CheckSuccessIcon />
                <span className="option-item-first-para">Lời mở đầu</span>
              </div>

              <div className="option-item-first">
                <LockIcon />
                <span className="option-item-second-para">
                  Chương 01: Lý do khiến bạn chưa th....
                </span>
              </div>

              <div className="option-item-first">
                <span className="option-item-third-para">
                  Chương 02: Thói quen thành công giúp bạn i..
                </span>
              </div>

              <div className="option-item-first">
                <span className="option-item-third-para">
                  Tông kết chương 02
                </span>
              </div>

              <div className="option-item-first">
                <span className="option-item-third-para">
                  Ôn luyện chương 02
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={
            dropdown
              ? {
                  transform: "translateY(100%)",
                }
              : { transform: "translateY(0px)" }
          }
          className="banner"
        >
          <button
          onClick={() => setDropDown(!dropdown)}
            style={
              fullscreen
                ? {
                    opacity: "1",
                  }
                : { opacity: "0" }
            }
            className="drop-down"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACWSURBVHgB7ZLLDYAgEEQZsQBL4GgbVmopWoZHSqABXFkNiaIJiycTmROf2fc4oFRNzecDabHreqN1M/Ha+3VwbrGSOZEgwgFleE+krFSSFZzhRGT3IcBIJSiBe08Dn2uNSSpBCTyCjjuZBKXwaycvwRt4iaRJh6RwDt9xh7s807YY085NEF5jw0ecc/AnCRGy/ZqaP2YD5W+oHxVMN9IAAAAASUVORK5CYII="
              alt=""
            />
          </button>

          <div className="pdf-banner">
            <button className="pdf-btn">
              <Plus />
            </button>
            <button className="pdf-btn">
              <img
                className="pdf-imgs"
                src="https://biboo.tecinus.vn/static/media/actions-minus.5d5de39d.svg"
                alt=""
              />
            </button>
            <button className="pdf-btn">
              <img
                className="pdf-imgs"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZQ9UsJQEMd3Q2SENHGSzDhWoXAGrSgt8QYeIZwAOYFwAvUEYKV23AA4gdgInelNmFSxIVn3GdPwlQ9ix38mM5uv93v7f7sLcFCCcPWBqpqqLFfu+FWTCKZBEPY8b25DTpVWHyjK2TMiWhyeIkJDktCqVo1j3/+aQA5tABgvURRecwbMwiu+aVYqhqUo2rvvOzZkkLTthePMx647s4jCFhHZnI3Jn4807bKvqnUT9gXEct35gEE1DnvinkFWqSSNdP3iFlIoERDLcT66y2VY42yeomzwnrP5NIzzRiEAIVFNq7YRHb3tsi0TINY220SJFwKIFdvG4VRkw/1jFQpIIxlyKur4apsIuZpIFWcSBDQsBKDrdR4jUp9DE5GAG3IQBN8dz7O9vQCiUmQZ+2JO4e8UoylfHT708bZ/UgHW7QCPd95znNlD0r+JgM12+BvtyAT4W7jN4Y2wI2osau2yIyUAx7xcUwy2aGFhBzxyY3Uhh9bGdbmsTXjBEx7TYtevXHqtxWI2hIP+Sz9ROL4NoqqzdAAAAABJRU5ErkJggg=="
                alt=""
              />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsPopUp(!isPopUp)}
                className={isPopUp ? "pdf-btn blue-bg" : "pdf-btn"}
              >
                <PdfIcon />
              </button>
              {isPopUp && (
                <div className="pop-up-auto">
                  <ul className="pop-up-content">
                    <li className="pop-up-title">Tự chuyển trang</li>
                    <li className="pop-up-read">10 phút</li>
                    <li className="pop-up-read">5 phút</li>
                    <li className="pop-up-read">2 phút</li>
                    <li className="pop-up-read">1 phút</li>
                    <li className="pop-up-read">30s</li>
                  </ul>
                </div>
              )}
            </div>
            <button className="pdf-btn">
              <img
                className="pdf-imgs"
                src="https://biboo.tecinus.vn/static/media/cil_flip-single-page.9890543c.svg"
                alt=""
              />
            </button>

            <button
              onClick={() => setOpen(!open)}
              className={open ? "pdf-btn blue-bg" : "pdf-btn"}
            >
              <FeedCardIcon />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isOpen ? "pdf-btn blue-bg" : "pdf-btn"}
            >
              <PlusIcons />
            </button>

            <button className="pdf-btn">
              <img
                className="pdf-imgs"
                src="https://biboo.tecinus.vn/static/media/share-line.22bffc32.svg"
                alt=""
              />
            </button>

            <button
              onClick={() => setFullscreen(!fullscreen)}
              className={fullscreen ? "pdf-btn blue-bg" : "pdf-btn"}
            >
              <FullscreenIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPDF;
