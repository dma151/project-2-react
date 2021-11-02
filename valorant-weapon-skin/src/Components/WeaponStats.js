import ListGroup from "react-bootstrap/ListGroup"

const WeaponStats = (props) => {
  return (
    <div className="weaponStats">
      <h4 className="sectionTitle">Weapon Data</h4>
      {props.weaponStats && (
        <ListGroup>
          <ListGroup.Item id="bootstrapListOverride">Category: {props.weaponStats.shopData.category}</ListGroup.Item>
          <ListGroup.Item id="bootstrapListOverride">Shop Cost: {props.weaponStats.shopData.cost}</ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default WeaponStats;
