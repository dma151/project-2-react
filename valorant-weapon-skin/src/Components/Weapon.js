import WeaponStats from "./WeaponStats"
import WeaponImage from "./WeaponImage"
import SkinList from "./SkinList"

const Weapon = (props) => {
    const weapon = props.weaponList.filter(item => props.match.params.weapon === item.displayName)[0]
    return (
        <div className='weapon'>
            <WeaponImage bigImage={props.bigImage} />
            <WeaponStats weaponStats={weapon} />
            <SkinList weaponInfo={weapon}  onClick={props.onClick}/>
        </div>
    )
}

export default Weapon