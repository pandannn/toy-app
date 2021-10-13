import { Button, Container, Divider } from "@mui/material";

const ShoppingList = () => {
  return (
    <>
      <Container>
        <div className="shoppingListDividerTop">
          <h1>My List</h1>
          <Divider />
        </div>
        <div className="felxContainershoppingList">
          <img
            src="https://uploads-ssl.webflow.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png"
            alt=""
          />
          <div className="textInProductShoppingList">
            <p>Teddy Bear</p>
            <p>$ 30.00 USD</p>
            <a href="/shoppinglist">Remove</a>
          </div>
          <h1>1</h1>
        </div>
        <div className="felxContainershoppingList">
          <img
            src="https://uploads-ssl.webflow.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png"
            alt=""
          />
          <div className="textInProductShoppingList">
            <p>Happy Flower</p>
            <p>$ 38.00 USD</p>
            <a href="/shoppinglist">Remove</a>
          </div>
          <h1>1</h1>
        </div>
        <Divider />
        <div className="felxShoppingListbuttom">
          <p>Subtotal </p>
          <p>$ 68 USD</p>
        </div>
        <Button variant="contained" disableElevation id="buttonShoppingList">
          Continue to check out
        </Button>
      </Container>
    </>
  );
};

export default ShoppingList;
