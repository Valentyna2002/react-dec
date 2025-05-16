import {IPostModel} from "../../../models/JsonModels/PostModel.ts";
import {FC} from "react";

type PostProps={
    post:IPostModel
}

export const PostJson:FC<PostProps> = ({post}) => {
    return (
            <div className='m-5'>
                <h1>ID: {post.id}___ {post.title} USER ID:{post.userId}</h1>
                <p>{post.body}</p>
                <hr/>
            </div>
    )
}
