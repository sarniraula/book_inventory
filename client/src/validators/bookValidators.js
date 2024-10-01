export const isValidISBN = (isbn) => {
    const isbn10Pattern = /^\d{9}[\dX]$/;  // ISBN-10
    const isbn13Pattern = /^\d{13}$/;      // ISBN-13
    return isbn10Pattern.test(isbn) || isbn13Pattern.test(isbn);
};
  