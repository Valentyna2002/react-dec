import {IPosts} from "../../../models/DummyModels/PostModel.ts";
import {FC} from "react";

type PostProps={
    post:IPosts
}

export const PostDummy:FC<PostProps> = ({post}) => {
    return (
        <div>
            <h1>ID: {post.id}___ {post.title}</h1>
            <p>{post.body}</p>
            <h3>Likes:{post.reactions.likes}_____Dislikes:{post.reactions.dislikes}</h3>
            <h4>TAGS: {post.tags.map((tag, index) => (
                <span key={index}>#{tag} </span>
            ))}</h4>
            <hr/>
        </div>
    )
}
