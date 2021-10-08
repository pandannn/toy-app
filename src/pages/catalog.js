import { Button, Divider } from "@mui/material";
import Container from "@mui/material/Container";
import CardContent from "../components/Card";

const catalog = () => {
  const stuffedAnimals = [
    {
      name: "Teddy Bear",
      price: "30.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png",
    },
    {
      name: "Mega Plush Toy",
      price: "38.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae124e03ef144f2b4a9bef_33837-2-plush-toy-transparent-background-min.png",
    },
    {
      name: "Cute Dog",
      price: "24.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f7a1f2da258291736c4_33908-7-plush-toy-file-min.png",
    },
    {
      name: "Little Friend",
      price: "27.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png",
    },
  ];
  const woodenToys = [
    {
      name: "Happy Flower",
      price: "38.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf529c7a16ad5b5fd9fdf3_33727-9-wooden-toy-transparent-image-min.png",
    },
    {
      name: "Lift Machine",
      price: "24.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf525bbf02340f30398cb3_33505-6-wooden-toy-clipart-min.png",
    },
    {
      name: "Wooden Camera",
      price: "32.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png",
    },
    {
      name: "Little Rabbit",
      price: "16.t00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
    },
  ];

  return (
    <>
      {/* navCatalog */}
      <Container>
        <div className="containerCatalog">
          <div className="textNavCatalog">
            <h1>All Toys!</h1>
          </div>
          <div className="buttonNavCatalog">
            <Button>asd</Button>
            <Button>asd</Button>
            <Button>ads</Button>
          </div>
        </div>
        <Divider />
        <div className="containerCard">
          <div className="stuffedAnimalCard">
            {stuffedAnimals.map((animal) => (
              <CardContent
                name={animal.name}
                price={animal.price}
                img={animal.img}
              />
            ))}
          </div>
          <div className="woodenCard">
            {woodenToys.map((wooden) => (
              <CardContent
                name={wooden.name}
                price={wooden.price}
                img={wooden.img}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default catalog;
