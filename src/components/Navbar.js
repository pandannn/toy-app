import { Button } from "@mui/material";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";
const Navbar = () => {
  return (
    <>
      <div className="allContainerAppbar">
        <h1 href="/">ToyStore</h1>
        <div className="ContainerhrefNav">
          <div className="hreafNav">
            <a href="/home">Home</a>
            <a href="/catalog">Catalog</a>
            <a href="/about">About</a>
          </div>
          <div className="btnNav">
            <Button>
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
