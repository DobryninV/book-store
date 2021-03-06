import { connect } from "react-redux";
import { bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart } from "../../actions";

import "./shopping-cart-table.css";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {

  const renderRow = (item, index) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger">
            <i className="fa fa-trash"/>
          </button>
          <button 
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success">
            <i className="fa fa-plus-circle"/>
          </button>
          <button 
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning">
            <i className="fa fa-minus-circle"/>
          </button>
        </td>
      </tr>
    )
  };

  return (
    <div className="shopping-cart-table row">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => { 
  return { 
    items: cartItems, 
    total: orderTotal 
  };
};

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemoveFromCart,
  onDelete: allBooksRemoveFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);