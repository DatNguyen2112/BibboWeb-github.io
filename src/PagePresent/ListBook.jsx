
export default function ListBooks() {
    const List = [
      {
        id: 1,
        img: "https://file.mentor.vn/files/books/file-1656303012957.png",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 2,
        img: "https://file.mentor.vn/files/books/file-1639473570436.jpg",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 3,
        img: "https://file.mentor.vn/files/books/file-1639470478470.png",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 4,
        img: "https://file.mentor.vn/files/books/file-1639464974946.png",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 5,
        img: "https://file.mentor.vn/files/books/file-1639452978900.jpg",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 6,
        img: "https://file.mentor.vn/files/books/file-1639449235119.png",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 7,
        img: "https://file.mentor.vn/files/books/file-1639129239011.png",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 8,
        img: "https://file.mentor.vn/files/books/file-1639123935302.jpg",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 9,
        img: "https://file.mentor.vn/files/books/file-1639123935302.jpg",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      },
      {
        id: 10,
        img: "https://file.mentor.vn/files/books/file-1639123935302.jpg",
        title: "Người giàu có nhất thành...",
        author: "Nguyễn Hiền Lê",
      }
    ];

    return (
        <div className="lists">
            {List.map(itemList => {
                return (
                  <div className="list-item" key={itemList.id}>
                    <div className="list-item-img">
                      <img className="list-item-photos" src={itemList.img} alt={itemList.title} />
                    </div>

                    <h3 className="list-item-para">{itemList.title}</h3>
                    <small className="list-item-paras">{itemList.author}</small>
                  </div>
                );
            })}
        </div>
    )
}