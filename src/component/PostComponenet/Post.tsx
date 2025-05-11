import {PostModel} from "../../model/PostModel.ts";
import {FC} from "react";
import './post.css'


type PostProps={
    post:PostModel
}
export const Post:FC<PostProps> = ({post:{id,title,body}}) => {


    return (
        <div className='bg-amber-300'>
            <h1>ID: {id}___ {title}</h1>
            <p>{body}</p>

        </div>
    )
}