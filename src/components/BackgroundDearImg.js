import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { TiMediaPlay } from "react-icons/ti";

function backgroundDearImg() {
  return (
    <>
      <div className="backgroundImgSectionFive">
        <Container>
          <div className="textOnBackgroundImgSectionFive">
            <p>About The Shop</p>
            <h1>Watch Our Story</h1>
            <h4>
              There is no magic formula to write perfect ad copy.iy is based on
              a number of factors, including ad placement, demographic, even the
              consumer's mood.
            </h4>
            <Button variant="contained" color="success">
              {" "}
              <TiMediaPlay />
            </Button>
          </div>
        </Container>
      </div>
      ;
    </>
  );
}

export default backgroundDearImg;
