import {Comments} from "../../../model/CommentModel.ts";
import {FC} from "react";

type CommentProps = {
    comment:Comments
}

export const CommentComponentDummy:FC<CommentProps> = ({comment}) => {
    return (
        <div className='m-10 bg-amber-100' >
            <h3>Post Id : {comment.postId}__ID: {comment.id}</h3>
            <h1 className='text-2xl'>{comment.body}</h1>
            <h2>likes:{comment.likes}</h2>
            <p>User: <br/>
                Name:{comment.user.fullName} <br/>
            UserName:{comment.user.username}</p>
            <hr/>
        </div>
    )
}