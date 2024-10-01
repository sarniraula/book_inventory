export const exportToCSV = (books) => {
    if (!books || books.length === 0) {
      console.error('No data to export');
      return;
    }
  
    const headers = ['Title', 'Author', 'Genre', 'Publication Date', 'ISBN', 'Quantity'];
    const rows = books.map(book => [
      book.title,
      book.author,
      book.genre,
      book.publicationDate,
      book.isbn,
      book.quantity
    ]);
  
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');
  
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'books_inventory.csv');
    link.click();
  };
  
  export const exportToJSON = (books) => {
    if (!books || books.length === 0) {
      console.error('No data to export');
      return;
    }
  
    const jsonContent = JSON.stringify(books, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'books_inventory.json');
    link.click();
  };
  