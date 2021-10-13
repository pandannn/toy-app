import { Button, Divider } from "@mui/material";
import Container from "@mui/material/Container";
import CardContent from "../components/Card";
import Subscribe from "../components/Subscribe";

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
    {
      name: "Christmas Deer",
      price: "19.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0ede56ac5481f54e12e9_33610-4-plush-toy-hd-min-p-500.png",
    },
    {
      name: "Pluto Yellow Dog",
      price: "28.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0e6335e113da999a7976_33568-4-toy-image-min-p-500.png",
    },
    {
      name: "Grey Elephant",
      price: "45.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0db61f2da2a4ef173617_cute-plush-toy-stuffed-animal-47335-min-p-500.png",
    },
    {
      name: "Funny Clown",
      price: "36.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae0d07939555eac3b8a91c_33910-6-toy-clipart-min-p-500.png",
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
      price: "16.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51fc570913c1d31a83f6_33504-4-wooden-toy-transparent-min.png",
    },
    {
      name: "Rainbow Truck",
      price: "28.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf51b7c8d851a73cc4544c_33649-6-toy-transparent-image-min-p-500.png",
    },
    {
      name: "Happy Dog",
      price: "30.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5171ace69cb064b33d42_33388-1-wooden-toy-photos-min-p-500.png",
    },
    {
      name: "Caterpillar",
      price: "18.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf50843a685ea7dfd6e4fd_33371-3-wooden-toy-min-p-500.png",
    },
    {
      name: "Wooden Tractor",
      price: "22.00",
      img: "https://assets.website-files.com/5baddb6a35e113da0e9a4802/5baf5100ace69c1b26b33d2d_33476-9-wooden-toy-hd-min-p-800.png",
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
            <Button variant="outlined">All Toys</Button>
            <Button variant="outlined">Wooden Toys</Button>
            <Button variant="outlined">Stuffed Animals</Button>
          </div>
        </div>
        <Divider />
        <div className="containerGridcardCatalog">
          <div className="stuffedAnimalCardCatalog">
            {stuffedAnimals.map((animal) => (
              <CardContent
                name={animal.name}
                price={animal.price}
                img={animal.img}
              />
            ))}
          </div>
          {/* <div className="woodenCardCatalog">
            {woodenToys.map((wooden) => (
              <CardContent
                name={wooden.name}
                price={wooden.price}
                img={wooden.img}
              />
            ))}
          </div> */}
        </div>
      </Container>
      <Subscribe />
    </>
  );
};

export default catalog;
