import {useEffect, useState} from "react";
import {CommentModel} from "../../../../model/CommentModel.ts";
import {Comment} from "../CommentComponent /Comment.tsx";
import {loadComment} from "../../../../servise/api.servise.ts";

export const Comments = () => {

    const [comment, setComment] = useState<CommentModel[]>([])
    useEffect(()=>{
        loadComment().then(value => setComment(value))
    },[])

    return (
        <div>
            {
               comment.map(comment=> <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    )
}