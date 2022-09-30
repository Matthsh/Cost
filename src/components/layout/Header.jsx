import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>
            <ul className="">
                <li><Link to="/">home</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/newproject">New project</Link></li>
            </ul>
        </div>
    )
}

export default Header;