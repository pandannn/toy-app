import { Button } from "@mui/material";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";
import { Link, useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();

  return (
    <>
      <div className="allContainerAppbar">
        <h1 href="/">ToyStore</h1>
        <div className="ContainerhrefNav">
          <div className="hreafNav">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/shoppinglist">Shopping list</Link>
          </div>
          <div className="btnNav">
            <Button onClick={() => history.push("/shoppinglist")}>
              mylist
              <FiShoppingCart />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
