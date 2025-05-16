import {Link} from "react-router-dom";

export const PostsMenu = () => {
    return (
        <ul>
            <li><Link to={'/posts/jsonplaceholder'}>POSTS JSONPLACEHOLDER</Link></li>
            <li><Link to={'/posts/dummyjson'}>POSTS DUMMYJSON</Link></li>
        </ul>
    )
}