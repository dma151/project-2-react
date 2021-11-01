import Image from "react-bootstrap/Image"

const WeaponImage = (props) => {
  return (
    <div className="bigImage" >
      <Image src={props.bigImage} fluid />
    </div>
  );
};

export default WeaponImage;
