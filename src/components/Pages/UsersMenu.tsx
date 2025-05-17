import {Link} from "react-router-dom";

export const UsersMenu = () => {
    return (
        <ul>
            <li><Link to={'/users/jsonplaceholder'}>USERS JSONPLACEHOLDER</Link></li>
            <li><Link to={'/users/dummyjson'}>USERS DUMMYJSON</Link></li>
        </ul>
    )
}