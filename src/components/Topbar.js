import { Link } from "react-router-dom";
import "../styles/topbar.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
      <Link to="/">
        <h3>
          <AddShoppingCartIcon /> CART
        </h3>
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          {/*<li className="topListItem">
            <HomeIcon />
  </li>*/}
          <Link to="/cart">
            <li className="topListItem">
              <ShoppingCartIcon />
            </li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
