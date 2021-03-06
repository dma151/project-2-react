import ExampleWeapon from "./ExampleWeapon";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Arsenal.css";

const Arsenal = (props) => {
  return (
    <Container>
      <div className="carousel">
        <ExampleWeapon
          vandalData={props.weaponList[2]}
          phantomData={props.weaponList[4]}
          meleeData={props.weaponList[17]}
        />
      </div>
      <h1 className="sectionTitle">Choose Your Weapon</h1>
      <ListGroup>
        <Row xs={1} md={2} lg={4}>
          {props.weaponList &&
            props.weaponList.map((item, i) => {
              return (
                <Col>
                  <ListGroup.Item
                    action
                    id="bootstrapListOverride"
                    key={i}
                    onClick={() => props.onClick(item.displayIcon)}
                  >
                    <Link to={"/arsenal/" + item.displayName}>
                      {item.displayName}
                    </Link>
                  </ListGroup.Item>
                </Col>
              );
            })}
        </Row>
      </ListGroup>
    </Container>
  );
};

export default Arsenal;
