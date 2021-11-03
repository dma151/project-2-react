import WeaponStats from "./WeaponStats";
import WeaponImage from "./WeaponImage";
import SkinList from "./SkinList";
import Container from "react-bootstrap/Container";
import "./Weapon.css";

const Weapon = (props) => {
  const weapon = props.weaponList.filter(
    (item) => props.match.params.weapon === item.displayName
  )[0];
  return (
    <Container>
      <WeaponImage bigImage={props.bigImage} name={props.match.params.weapon} />
      <WeaponStats weaponStats={weapon} />
      <SkinList weaponInfo={weapon} onClick={props.onClick} />
    </Container>
  );
};

export default Weapon;
