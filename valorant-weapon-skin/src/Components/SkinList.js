import ListGroup from "react-bootstrap/ListGroup"

const SkinList = (props) => {
  return (
    <div className="skinList">
      <h4>Weapon Skins</h4>
      <ListGroup>
        {props.weaponInfo &&
          props.weaponInfo.skins.map((item) => {
            return (
              <ListGroup.Item
                key={item.uuid}
                onClick={() => props.onClick(item.chromas[0].fullRender)}
              >
                {item.displayName}
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </div>
  );
};

export default SkinList;
