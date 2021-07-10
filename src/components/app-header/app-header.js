
import { Link } from "react-router-dom";

import "./app-header.css";

const AppHeader = ({ numItems, total }) => {
  return (
    <header className="app-header">
      <Link className="logo" to="/">Books_Shop</Link>
      <Link className="basket" to="/cart/">
        <i className="fas fa-shopping-basket"></i>
        <p>{numItems} items ({total})</p>
      </Link>
    </header>
  );
};

export default AppHeader;