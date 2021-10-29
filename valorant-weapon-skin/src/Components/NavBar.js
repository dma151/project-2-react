import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/arsenal'><img src='https://media.valorant-api.com/sprays/0a6db78c-48b9-a32d-c47a-82be597584c1/fulltransparenticon.png' alt='logo' width='50px'/></Link>
                <p className='webTitle'>Valorant Weapon Skins</p>
            </div>
            <div>
                <p><span className='hamburger'>&#9776;</span></p>
            </div>
        </div>
    )
}

export default NavBar;