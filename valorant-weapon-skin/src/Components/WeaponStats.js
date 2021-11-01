import ListGroup from "react-bootstrap/ListGroup"

const WeaponStats = (props) => {
  return (
    <div className="weaponStats">
      <h4>Weapon Data</h4>
      {props.weaponStats && (
        <ListGroup>
          <ListGroup.Item>Category: {props.weaponStats.shopData.category}</ListGroup.Item>
          <ListGroup.Item>Shop Cost: {props.weaponStats.shopData.cost}</ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default WeaponStats;
