import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkinList = (props) => {
  return (
    <Container>
      <h4 className="sectionTitle">Weapon Skins</h4>
      <ListGroup>
        <Row xs={1} md={2} lg={4}>
          {props.weaponInfo &&
            props.weaponInfo.skins.map((item) => {
              return (
                <Col>
                  <ListGroup.Item
                    id="bootstrapListOverride"
                    key={item.uuid}
                    onClick={() => props.onClick(item.chromas[0].fullRender)}
                  >
                    {item.displayName}
                  </ListGroup.Item>
                </Col>
              );
            })}
        </Row>
      </ListGroup>
    </Container>
  );
};

export default SkinList;
