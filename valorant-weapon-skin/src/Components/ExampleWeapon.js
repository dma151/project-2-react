import Carousel from "react-bootstrap/Carousel";

const ExampleWeapon = (props) => {
  console.log(props);
  return (
    <Carousel>
      {props.vandalData && (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.vandalData.skins[4].chromas[0].fullRender}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Glitchpop Vandal</h3>
          </Carousel.Caption>
        </Carousel.Item>
      )}
      {props.phantomData && (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.phantomData.skins[2].chromas[0].fullRender}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Radiant Crisis 001 Phantom</h3>
          </Carousel.Caption>
        </Carousel.Item>
      )}
      {props.meleeData && (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.meleeData.skins[2].chromas[0].fullRender}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Yoru's Stylish Butterfly Comb</h3>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default ExampleWeapon;
