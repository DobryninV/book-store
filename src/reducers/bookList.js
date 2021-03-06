const updateBookList = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      isLoading: true,
      error: null,
    }
  }

  switch (action.type) {
    case "FETCH_BOOKS_SUCCESS": 
      return {
        books: [],
        isLoading: true,
        error: null
      };
    case "FETCH_BOOKS_LOADED": 
      return {
        books: action.payload,
        isLoading: false,
        error: null
      };
    case "FETCH_BOOKS_FAILURE": 
      return {
        books: [],
        isLoading: false,
        error: action.payload
      };
    default:
      return state.bookList
  };
}

export default updateBookList;