import { Link } from 'react-router-dom'

const Arsenal = (props) => {
    return (
        <div className='arsenal'>
            <h1>Choose Your Weapon</h1>
            <div className='weaponList'>
            <ul>
                {props.weaponList && props.weaponList.map((item) => {
                    return (
                        <li key={item.uuid} onClick={() => props.onClick(item.displayIcon)}><Link to={'/arsenal/' + item.displayName}>{item.displayName}</Link></li>
                    )
                })}
            </ul>
        </div>
        </div>
    )
}

export default Arsenal