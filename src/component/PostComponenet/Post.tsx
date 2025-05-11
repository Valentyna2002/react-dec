import {PostModel} from "../../model/PostModel.ts";
import {FC} from "react";

type PostProps={
    post:PostModel
}
export const Post:FC<PostProps> = ({post:{id,title,body}}) => {


    return (
        <div>
            <h1 className='bg-blue-200'>ID: {id}___ {title}</h1>
            <p>{body}</p>
        </div>
    )
}