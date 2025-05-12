import {CommentModel} from "../../../../model/CommentModel.ts";
import {FC} from "react";

type CommentProps = {
    comment:CommentModel
}

export const Comment:FC<CommentProps> = ({comment:{postId, id, name, email, body}}) => {
    return (
        <div className='m-10 bg-amber-100' >
            <h3>Post Id{postId}__ID:{id}</h3>
            <h1 className='text-2xl'>{name}</h1>
            <h2>email:{email}</h2>
            <p>{body}</p>
            <hr/>
        </div>
    )
}