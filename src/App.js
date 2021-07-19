import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Product from "./screens/Products";
import ProductScreen from "./screens/ProductDetails"
import CartScreen from "./screens/Cart"
import Header from "./components/Topbar"
function App() {
  return (
    <div className="App">
    
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
