import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const Arsenal = (props) => {
  return (
    <div className="arsenal">
      <h1>Choose Your Weapon</h1>
      <div className="weaponList">
        <ListGroup>
          {props.weaponList &&
            props.weaponList.map((item) => {
              return (
                <ListGroup.Item onClick={() => props.onClick(item.displayIcon)}>
                  <Link to={"/arsenal/" + item.displayName}>
                    {item.displayName}
                  </Link>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </div>
    </div>
  );
};

export default Arsenal;
