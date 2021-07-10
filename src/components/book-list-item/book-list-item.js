import "./book-list-item.css";

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, coverImage, price } = book;
  return (
    <div className="jumbotron container">
      <div className="row book-card">
        <img className="book-image" src={coverImage} alt={`${title}_image`}/>
        <div className="book-description">
          <h3>{title}</h3>
          <p>Author: <span className="fw-bold">{author}</span></p>
          <p>Price: <span className="fw-bold">${price}</span></p>
          <button
            onClick={onAddedToCart} 
            className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;