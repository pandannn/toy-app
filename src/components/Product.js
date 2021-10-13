import { Button, Container, Divider } from "@mui/material";
import CardContent from "../components/Card";
import React from "react";
import Subscribe from "./Subscribe";

const Product = () => {
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

  return (
    <>
      {/* ProductContainer */}
      <Container>
        <div className="productContainer">
          <div className="productTextlift">
            <h1>Teddy Bear</h1>
            <p>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy. It is based on
              a number of factors.
            </p>
            <h2>$ 30.00 USD</h2>
            <div className="countNumberandBtn">
              <h2>0</h2>
              <Button>Add to list</Button>
            </div>
          </div>
          <div className="produxtImgright">
            <img
              src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png"
              alt=""
            />
          </div>
        </div>
      </Container>
      {/* Product Details */}
      <Container>
        <div className="productDividerProductdetails">
          <p>Product Details</p>
          <Divider />
        </div>
        <div className="containerFelxProductDetails">
          <div className="textProductDetails">
            <h1>Add Your Product Decription</h1>
            <p>
              The rich text element allows you to create and format headings,
              paragraphs, blockquotes, images, and video all in one place
              instead of having to add and format them individually. Just
              double-click and easily create content. A rich text element can be
              used with static or dynamic content. For static content, just drop
              it into any page and begin editing. For dynamic content, add a
              rich text field to any collection and then connect a rich text
              element to that field in the settings panel. Voila!
            </p>
            <h1>Simple & Elegant Template</h1>
            <p>
              Headings, paragraphs, blockquotes, figures, images, and figure
              captions can all be styled after a class is added to the rich text
              element using the "When inside of" nested selector system.
            </p>
            <li>Beautifully Designed</li>
            <li>Fully Responsive</li>
            <li>CMS Content</li>
            <li>Smooth Animations</li>
            <p>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
            </p>
            <h3>Perfect Choice for Your Business</h3>
            <p>
              Grabbing the consumer’s attention isn’t enough; you have to keep
              that attention for at least a few seconds. This is where your
              benefits come into play or a product description that sets your
              offer apart from the others.
            </p>
          </div>
          <div className="dividerProductDetail">
            <p>Width 38 in</p>
            <Divider />
            <p>Height 32 in</p>
            <Divider />
            <p>Length 21.5 in</p>
            <Divider />
            <p>weight 24 in</p>
            <Divider />
          </div>
        </div>
      </Container>

      {/* RecommentProduct */}
      <Container>
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

      {/* Subscribe */}
      <Subscribe />
    </>
  );
};
export default Product;
