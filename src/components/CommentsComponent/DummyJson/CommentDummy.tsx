import {FC} from "react";
import {IComments} from "../../../models/DummyModels/CommentModel.ts";

type CommentProps = {
    comment:IComments
}


export const CommentDummy:FC<CommentProps> = ({comment}) => {
    return (
        <div>
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

