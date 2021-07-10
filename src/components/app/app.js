import { Route, Switch } from "react-router-dom";
import { CardPage, HomePage } from "../pages";
import AppHeader from "../app-header";
import ShoppingCartTable from "../shopping-cart-table";

import "./app.css";

const App = () => {

  return (
    <div className="container">
      <AppHeader numItems={5} total={"$666"}/>
      <Switch>
        <Route path='/cart' component={CardPage}/>
        <Route path="/" component={HomePage} exact/>
      </Switch>
      <ShoppingCartTable />
    </div>
  )
}


export default App;