import {Link} from "react-router-dom";

export const CommentsMenu = () => {
    return (
        <ul>
            <li><Link to={'/comments/jsonplaceholder'}>COMMENTS JSONPLACEHOLDER</Link></li>
            <li><Link to={'/comments/dummyjson'}>COMMENTS DUMMY JSON</Link></li>
        </ul>
    )
}