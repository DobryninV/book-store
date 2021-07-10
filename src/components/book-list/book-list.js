import { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux"; 
import { withBookStoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";
import { compose } from "../../utils";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

import "./book-list.css"

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul>
      {
        books.map((book) => {
          const { id } = book;
          return (
            <li className="book-item" key={id}>
              <BookListItem book={book} onAddedToCart={() => onAddedToCart(id)}/>
            </li>
          )
        })
      }
    </ul>
  );
}

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {    
    const { books, isLoading, error, onAddedToCart } = this.props;

    if (error) {
      console.log(error)
      return <ErrorIndicator />;
    }

    if (isLoading) {
      return <Spinner />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>;
  };
};

const mapStateToProps = ({ bookList: { books, isLoading, error }}) => { return { books, isLoading, error } };

const mapDispatchToProps = (dispatch, { bookstoreService }) => { 
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps))
  (BookListContainer);