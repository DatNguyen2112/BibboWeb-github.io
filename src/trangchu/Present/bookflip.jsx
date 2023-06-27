// import React from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import { useState, useRef } from "react";


// const PageBook = React.forwardRef((props, ref) => {
//   const [numPages, setNumPages] = useState(null);
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
//   return (
//     <div className="demoPage" ref={ref} data-density="hard">
//       <Document
//         file="https://file.mentor.vn/files/books/lesson/file-1636628304136.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={props.pageNumber} renderTextLayer={false} />
//       </Document>
//     </div>
//   );
// });
// const onFlip = () => {};

// function BookFlip( {numPages} ) {
//   const book = useRef(null);
//   const container = useRef(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const handleNext = () => {
//     book.current.pageFlip().flipNext();
//     setPageNumber(pageNumber + 1);
//   };
//   return (
//     <div className="pdf-container">
//       <div className="pageNumbers">
//         {pageNumber} / {numPages}
//       </div>
//       <div id="container">
//         {pageNumber > 1 && (
//           <button
//             onClick={() => {
//               book.current.pageFlip().flipPrev();
//               setPageNumber(pageNumber - 1);
//             }}
//           >
//             <img
//               className="icons-item"
//               src="https://biboo.tecinus.vn/static/media/arrow-chevron-back-black.937e2157.svg"
//               alt=""
//             />
//           </button>
//         )}

//         <HTMLFlipBook */}
//           width={900}
//           height={1350}
//           size="stretch"
//           minWidth={300}
//           maxWidth={1500}
//           minHeight={400}
//           maxHeight={2250}
//           drawShadow={true}
//           maxShadowOpacity={0}
//           showCover={true}
//           mobileScrollSupport={true}
//           useMouseEvents={false}
//           onFlip={onFlip}
//           // flippingTime={800}
//           // usePortrait={false}
//           className="demo-book"
//           ref={book}
//         >
//           {[...Array(5)].map((item, index) => (
//             <PageBook key={index} pageNumber={index + 1} />
//           ))}
//         </HTMLFlipBook>

//         {pageNumber < 5 && (
//           <button onClick={handleNext}>
//             <img
//               className="icons-item"
//               src="https://biboo.tecinus.vn/static/media/arrow-chevron-back-black.937e2157.svg"
//               alt=""
//             />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default BookFlip;
