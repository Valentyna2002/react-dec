import {Link} from "react-router-dom";
import './Menu.css'

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'/users'}>USERS</Link></li>
            <li><Link to={'/posts'}>POSTS</Link></li>
            <li><Link to={'/comments'}>COMMENTS</Link></li>

        </ul>
    )
}