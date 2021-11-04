import ListGroup from "react-bootstrap/ListGroup"

const WeaponStats = (props) => {
    console.log(props.weaponStats)
  return (
    <div className="weaponStats">
      <h4 className="sectionTitle">Weapon Data</h4>
      {props.weaponStats.weaponStats && (
        <ListGroup>
          <ListGroup.Item id="bootstrapListOverride" key="category">Category: {props.weaponStats.shopData.category}</ListGroup.Item>
          <ListGroup.Item id="bootstrapListOverride" key="shop-cost">Shop Cost: {props.weaponStats.shopData.cost}</ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default WeaponStats;