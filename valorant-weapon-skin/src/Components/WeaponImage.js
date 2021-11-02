import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import "./WeaponImage.css"

const WeaponImage = (props) => {
  return (
    <Container>
        <Card id="bootstrapImgOverride">
            <Card.Img variant="top" src={props.bigImage} />
            <Card.Title>Odin</Card.Title>
        </Card>
    </Container>
  );
};

export default WeaponImage;

{/* <div className="bigImage" >
<Image src={props.bigImage} fluid/>
</div> */}