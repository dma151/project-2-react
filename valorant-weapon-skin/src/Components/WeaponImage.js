import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import "./WeaponImage.css"

const WeaponImage = (props) => {
  return (
    <Container>
        <Card id="bootstrapImgOverride">
            <Card.Img variant="top" src={props.bigImage} />
            <Card.Title>{props.name}</Card.Title>
        </Card>
    </Container>
  );
};

export default WeaponImage;