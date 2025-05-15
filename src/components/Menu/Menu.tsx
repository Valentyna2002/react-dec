import {Link} from "react-router-dom";
import './Menu.css'

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/users'}>USERS</Link></li>
                <li><Link to={'/posts'}>POSTS</Link></li>
                <li><Link to={'/comments'}>COMMENTS</Link></li>
                <li><Link to={'/PRODUCTS'}>PRODUCTS</Link></li>
            </ul>
        </div>
    )
}