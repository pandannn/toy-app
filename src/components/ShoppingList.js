import { Button, Container, Divider } from "@mui/material";
import { useState, useEffect } from "react";

const ShoppingList = ({ shoppingCart, setShoppingCart }) => {
  const [subTotal, setSubTotal] = useState(0);

  // handle submit shoppingcart
  async function handlesubmit() {
    await fetch("http://localhost:5001/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: shoppingCart.map((itm) => itm.p_name),
        price: shoppingCart.map((itm) => itm.price),
        total: subTotal,
      }),
    });
  }
  useEffect(() => {
    for (let itm of shoppingCart) {
      setSubTotal((prev) => prev + itm.price);
    }
  }, []);

  return (
    <>
      <Container>
        <div className="shoppingListDividerTop">
          <h1>My List</h1>
          <Divider />
        </div>
        {shoppingCart.map((itm) => (
          <div className="felxContainershoppingList">
            <img src={itm.p_img} alt="" />
            <div className="textInProductShoppingList">
              <p>{itm.p_name}</p>
              <p>$ {itm.price}.00 USD</p>
              <button
                id={itm.p_name}
                data-price={itm.price}
                onClick={(e) => {
                  setShoppingCart((prev) =>
                    prev.filter((itm) => itm.p_name !== e.target.id)
                  );
                  setSubTotal(
                    (prev) =>
                      prev - parseInt(e.target.getAttribute("data-price"))
                  );
                }}
              >
                Remove
              </button>
            </div>
            <h1>1</h1>
          </div>
        ))}
        <Divider />
        <div className="felxShoppingListbuttom">
          <p>Subtotal </p>
          <p>$ {subTotal} USD</p>
        </div>
        <Button
          variant="contained"
          disableElevation
          id="buttonShoppingList"
          onClick={handlesubmit}
        >
          Continue to check out
        </Button>
      </Container>
    </>
  );
};

export default ShoppingList;
