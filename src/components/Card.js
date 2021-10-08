import { Button, Container } from "@mui/material";
import { Card } from "@mui/material";

const CardContent = ({ name, price, img }) => {
  return (
    <>
      <Container className="containerCard">
        <Card className="contentCard">
          <img src={img} alt="" />
          <p>{name}</p>
          <Button variant="contained" color="success">
            {`$${price} USD`}
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default CardContent;
