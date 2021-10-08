import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Promotion from "../components/Promotion";
import Divider from "@mui/material/Divider";
import { TiArrowRightThick } from "react-icons/ti";
import BackgroundDearImg from "../components/BackgroundDearImg";
import Subscribe from "../components/Subscribe";

const about = () => {
  return (
    <>
      {/* SectionOne */}
      <Container>
        <div className="textTop">
          <p>Aill You Need is Fun!</p>
          <h1>Introducing ToyStore</h1>
          <h4>
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
          </h4>
          <Button> More About Us </Button>
        </div>
        <div className="imgTop">
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-1600.jpeg"
            alt=""
          />
        </div>
      </Container>
      {/* SectionTwo */}
      <Container>
        <div className="textSectionTwo">
          <p>Made for Webflow</p>
          <h1>Simple & Colorful Ecommerce Template for Your Business</h1>
        </div>
      </Container>

      {/* SectionTreeImgAndText */}
      <Container>
        <div className="containerFelxTextandImg">
          <div className="allTextinSectionSeven">
            <h1>Beautifully Designed</h1>
            <Divider variant="solid" color="success" id="dividerUnderText" />
            <p>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <Button variant="contained" color="success">
              Get It for FREE!
            </Button>
          </div>
          <div className="imgSectionseven">
            <img
              src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
              alt=""
            />
          </div>
        </div>
      </Container>

      {/* SectionFourBackgroundImg */}
      <BackgroundDearImg />

      {/* sectionFive */}
      <Subscribe />
    </>
  );
};

export default about;
