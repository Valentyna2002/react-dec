import {useEffect, useState} from "react";
import {ICommentModel} from "../../../models/JsonModels/CommentModel.ts";
import {loadComments} from "../../../servise/api.servise.jsonplaceholder.tsx";
import {CommentJson} from "./CommentJson.tsx";

export const CommentsJson = () => {

    const [comment, setComment] = useState<ICommentModel[]>([])
    useEffect(()=>{
        loadComments().then(value => setComment(value))
    },[])

    return (
        <div>
            {
                comment.map(comment=> <CommentJson comment={comment} key={comment.id}/>)
            }
        </div>
    )
}