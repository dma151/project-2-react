const WeaponStats = (props) => {
    return (
        <div className='weaponStats'>
            <h4>Weapon Data</h4>
            {props.weaponStats && 
            <ul>
                <li>Category: {props.weaponStats.shopData.category}</li>
                <li>Shop Cost: {props.weaponStats.shopData.cost}</li>
            </ul>}
        </div>
    )
}

export default WeaponStats