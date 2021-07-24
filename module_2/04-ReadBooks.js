const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function isBookRead(books, titleToSearch) {
    var book = books.find(b => b.title === titleToSearch);
    return (book) ? book.isRead : false; 
  }