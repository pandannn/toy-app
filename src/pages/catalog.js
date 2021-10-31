import { Button, Divider } from "@mui/material";
import Container from "@mui/material/Container";
import CardContent from "../components/Card";
import Subscribe from "../components/Subscribe";
import { useState, useEffect } from "react";

const Catalog = ({ setShoppingCart }) => {
  const [products, setProducts] = useState([]);

  //Get products whaen the component remdered
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("http://localhost:5001/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <>
      {/* navCatalog */}
      <Container>
        <div className="containerCatalog">
          <div className="textNavCatalog">
            <h1>All Toys!</h1>
          </div>
          <div className="buttonNavCatalog">
            <Button variant="outlined">All Toys</Button>
            <Button variant="outlined">Wooden Toys</Button>
            <Button variant="outlined">Stuffed Animals</Button>
          </div>
        </div>
        <Divider />
        <div className="containerGridcardCatalog">
          <div className="stuffedAnimalCardCatalog">
            {products.map((itm) => (
              <CardContent
                name={itm.p_name}
                price={itm.price}
                img={itm.p_img}
                setShoppingCart={setShoppingCart}
              />
            ))}
          </div>
        </div>

        {/* <div className="containerGridcardCatalog">
          <div className="stuffedAnimalCardCatalog">
            {stuffedAnimals.map((animal) => (
              <CardContent
                name={animal.name}
                price={animal.price}
                img={animal.img}
              />
            ))}
          </div>
          <div className="woodenCardCatalog">
            {woodenToys.map((wooden) => (
              <CardContent
                name={wooden.name}
                price={wooden.price}
                img={wooden.img}
              />
            ))}
          </div>
        </div> */}
      </Container>
      <Subscribe />
    </>
  );
};

export default Catalog;
