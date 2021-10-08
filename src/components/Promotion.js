import React from "react";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";

const Promotion = () => {
  return (
    <>
      <Container>
        <div className="containerFelxTextandImg">
          <div className="allTextinSectionSeven">
            <h1>Available for FREE!</h1>
            <Divider variant="solid" color="success" id="dividerUnderText" />
            <p>
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy
            </p>
            <Button variant="contained" color="success">
              GET IT NOW!
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
      ;
    </>
  );
};

export default Promotion;
