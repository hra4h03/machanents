import React from "react";
import "./styles.scss";
import GlobalState from "./store/storeContext";
import { ProductPage } from "./pages/ProductPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CartPage } from "./pages/CartPage";

export default function App() {
  return (
    <>
      <GlobalState>
        <Router>
          <nav>
            <Link to="/cart">Cart</Link> |{" "}
            <Link to="/products">ProductPage</Link>
          </nav>
          <Switch>
            <Route path="/products" exact>
              <ProductPage />
            </Route>
            <Route path="/cart" exact>
              <CartPage />
            </Route>
          </Switch>
        </Router>
      </GlobalState>
    </>
  );
}
