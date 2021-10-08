import React from "react";
import Container from "@mui/material/Container";
import { FormControl } from "@mui/material";
import { BiPaperPlane } from "react-icons/bi";

const Subscribe = () => {
  return (
    <>
      <Container>
        <div className="containerFlexSectionEight">
          <div className="textSubsribeSvg">
            <BiPaperPlane />
            <h2>
              Subscribe to pur newsletter & get{" "}
              <span id="textGreen">10% discount!</span>
            </h2>
          </div>
          <FormControl>
            <div className="formAndSubmit">
              <input
                type="email"
                id="typemail"
                placeholder="Enter your email address"
              />
              <input type="submit" />
            </div>
          </FormControl>
        </div>
      </Container>
    </>
  );
};
export default Subscribe;
