
const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_LOADED',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_SUCCESS"
  };
};

const booksError = (error) => {
  return{
    type: "FETCH_BOOKS_FAILURE",
    payload: error
  };
};

const bookAddedToCart = (bookId) => {
  return{
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  };
};

const bookRemoveFromCart = (bookId) => {
  return{
    type: "BOOK_REMOVE_FROM_CART",
    payload: bookId
  };
};

const allBooksRemoveFromCart = (bookId) => {
  return{
    type: "ALL_BOOKS_REMOVE_FROM_CART",
    payload: bookId
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchBooks,
  bookAddedToCart,
  bookRemoveFromCart,
  allBooksRemoveFromCart
};