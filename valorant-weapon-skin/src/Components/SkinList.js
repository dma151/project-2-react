const SkinList = (props) => {
    return (
        <div className='skinList'>
            <h4>Weapon Skins</h4>
            <ul>
                {props.weaponInfo && props.weaponInfo.skins.map((item) => {
                    return <li key={item.uuid} onClick={() => props.onClick(item.chromas[0].fullRender)}>{item.displayName}</li>
                })}
            </ul>
        </div>
    )
}

export default SkinList