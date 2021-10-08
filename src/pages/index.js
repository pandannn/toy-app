import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { TiArrowRightThick, TiMediaPlay } from "react-icons/ti";
import { BiPaperPlane } from "react-icons/bi";
import CardContent from "../components/Card";
import { FormControl } from "@mui/material";
import Subscribe from "../components/Subscribe";
import Promotion from "../components/Promotion";
import BackgroundDearImg from "../components/BackgroundDearImg";

function Home() {
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
      <main>
        {/* scrollSectionOne */}
        <div className="scrollSectionOne">
          <Container>
            <div className="whiteText">
              <p>Say Hello to ToyStore!</p>
              <h1>Wellcom To Child ToyShop</h1>
              <h1>Enjoy to Shopping For Your Child</h1>
              <Button variant="contained" color="success">
                Open Catalog
              </Button>
            </div>
          </Container>
        </div>
        {/* scrollSectionTwo */}
        <Container>
          <div className="homeTopRecommendContainer">
            <div className="homeTopRecommendItem">
              <img
                src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png"
                alt=""
              />
              <div className="recommendTextBtn">
                <h2>Stuffed Animal</h2>
                <Button variant="contained" color="info">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="homeTopRecommendItem">
              <img
                src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png"
                alt=""
              />
              <div className="recommendTextBtn">
                <h2>Wooden Toys</h2>
                <Button variant="contained" color="info">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </Container>
        {/* scrollSectionThree */}
        <Container>
          <div className="textTopCard">
            <h2>Stuffed Animals</h2>
            <a href="/">
              See All Toys <TiArrowRightThick />
            </a>
          </div>
          <Divider variant="middle" />
          <div className="productCard">
            {stuffedAnimals.map((animal) => (
              <CardContent
                name={animal.name}
                price={animal.price}
                img={animal.img}
              />
            ))}
          </div>
        </Container>
        {/* scrollSectionfour */}
        <Container>
          <div className="textTopCard">
            <h2>Wooden Toys</h2>
            <a href="/">
              See All Toys <TiArrowRightThick />
            </a>
          </div>
          <Divider variant="midle" />
          <div className="productCard">
            {woodenToys.map((wooden) => (
              <CardContent
                name={wooden.name}
                price={wooden.price}
                img={wooden.img}
              />
            ))}
          </div>
        </Container>
        {/* scrollSectionfive */}
        <BackgroundDearImg />
        {/* scrollSectionsix */}
        <Container>
          <div className="textSrctionsix">
            <p>Made for WebFlow</p>
            <h1>Simple & Colorful Ecoomerce</h1>
            <h1>Template for Your Business</h1>
          </div>
        </Container>

        {/* scrollSectionseven */}
        <Promotion />

        {/* scrollSectioneight */}
        <Subscribe />
      </main>
    </>
  );
}

export default Home;
